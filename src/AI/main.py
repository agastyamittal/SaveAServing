from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from prophet import Prophet
import pandas as pd
import numpy as np

from sklearn.metrics import mean_squared_error
from dbClient import fetch_user_data
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
   
)

class ForecastRequest(BaseModel):
    user_id: str
    meal_id: str


@app.post("/forecast")
def get_forecast(data: ForecastRequest):
    user_id = data.user_id
    meal_id = data.meal_id

    monthly_orders = fetch_user_data(user_id, meal_id)

    if not monthly_orders or len(monthly_orders) < 24:
        return {"error": "Insufficient order history. Need at least 24 months of data."}

    date_range = pd.date_range(start='2022-01-01', periods=len(monthly_orders), freq='MS')
    df = pd.DataFrame({'ds': date_range, 'y': monthly_orders})

    model = Prophet(
        seasonality_mode='additive',
        yearly_seasonality=True,
        weekly_seasonality=False,
        daily_seasonality=False,
        seasonality_prior_scale=0.1,
        changepoint_prior_scale=0.001
    )
    model.fit(df)

    future = model.make_future_dataframe(periods=6, freq='MS')
    forecast = model.predict(future)

    forecast_train = forecast[forecast['ds'].isin(df['ds'])].sort_values('ds')
    df_sorted = df.sort_values('ds').reset_index(drop=True)
    forecast_train = forecast_train.reset_index(drop=True)

    mse = mean_squared_error(df_sorted['y'].values, forecast_train['yhat'].values)
    rmse = np.sqrt(mse)

    print(f"\n📉 Prophet Model MSE: {mse:.2f}")
    print(f"📉 Prophet Model RMSE: {rmse:.2f} orders")

    forecast_output = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(6)
    forecast_output.columns = ['Date', 'Forecast', 'Lower_CI', 'Upper_CI']

    output_path = os.path.join(os.getcwd(), 'prophet_forecast.csv')
    forecast_output.to_csv(output_path, index=False)
    print(f"📁 Forecast saved to: {output_path}")

    return forecast_output.to_dict(orient='records')

