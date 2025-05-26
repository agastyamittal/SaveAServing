from supabase import create_client, Client
import os
import pandas as pd
def get_supabase_client():
    url = ""
    key = ""
    return create_client(url, key)

def fetch_user_data(b_id: str, m_id: str):
    sas_db = get_supabase_client()
    response = (
        sas_db
        .table("orders")  
        .select("o_order_date_time", "o_order_quantity") 
        .eq("b_id", b_id)
        .eq("m_id", m_id)
        .order("o_order_date_time", desc=False) 
        .execute()
    )
    if not response.data:
        return []
    df = pd.DataFrame(response.data)
    df['o_order_date_time'] = pd.to_datetime(df['o_order_date_time'])
    df['year_month'] = df['o_order_date_time'].dt.to_period('M')
    monthly_order_quantity = df.groupby('year_month')['o_order_quantity'].sum().sort_index()
    return monthly_order_quantity.tolist()