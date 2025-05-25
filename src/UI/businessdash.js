import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { sas_db } from '../DB/dbClient';
import NavBarBusiness from './NavBarBusiness';

function Businessdash() {

  const [menuItems, setMenuItems] = useState([]);
  const [openEditMenuDialog, setOpenEditMenuDialog] = useState(false);
  const [openAddOrderDialog, setOpenAddOrderDialog] = useState(false);
  const [openStartDonationDialog, setOpenStartDonationDialog] = useState(false);
  const [newMenuItems, setNewMenuItems] = useState('');
  const [newMenuItemsTemp, setNewMenuItemsTemp] = useState([]);
  const [orderQ, setOrderQ] = useState('');
  const [orderItem, setOrderItem] = useState('');
  const [orderList, setOrderList] = useState([]);
  const [notifQ, setNotifQ] = useState('');
  const [notifItem, setNotifItem] = useState('');
  const [notifList, setNotifList] = useState([]);
  const [chartData, setChartData] = useState({});
  const [donationCenters, setDonationCenters] = useState([]);
  const [selectedCenters, setSelectedCenters] = useState([]);
  const [donationList, setDonationList] = useState([]);
  const [donationItem, setDonationItem] = useState('');
  const [donationQ, setDonationQ] = useState('');
  const [donationEventName, setDonationEventName] = useState('');
  const [businessName, setBusinessName] = useState('');  const [forecast, setForecast] = useState([]);
  const [forecastR, setForecastR] = useState([]);
  const [orderPredictionItem, setOrderPredictionItem] = useState('');

  const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const region = ""; 
const accessKeyId = "";
const secretAccessKey = "";

const sesClient = new SESClient({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

async function sendEmail() {
  console.log(
    "sendEmail() called"
  );
  const params = {
    Source: "",
    Destination: {
      ToAddresses: [""],
    },
    Message: {
      Subject: {
        Data: "",
      },
      Body: {
        Text: {
          Data: "",
        },
      },
    },
  };

  const command = new SendEmailCommand(params);
  try {
    const response = await sesClient.send(command);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

  const startMenuItems = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const { data, error2 } = await sas_db.from('business_info').select('b_id').eq('b_email', userEmail).single();
    const { data: startMenuItems, error } = await sas_db.from('meals').select('m_meal_name').eq('b_id', data.b_id);
    if (startMenuItems) {
      setMenuItems(startMenuItems.map(item => item.m_meal_name));
    }
  };

  const fetchDonationCenters = async () => {
    const { data, error } = await sas_db.from('donation_center_info').select('d_name');
    if (data) {
      setDonationCenters(data);
    }
  };

  const handleAddMenuItem = () => {
    if (newMenuItems.trim()) {
      setMenuItems([...menuItems, newMenuItems.trim()]);
      setNewMenuItemsTemp([...newMenuItemsTemp, newMenuItems.trim()]);
      setNewMenuItems('');
    }
  };

  const handleAddToOrderList = () => {
    if (orderItem && orderQ) {
      const newOrder = {
        item: orderItem,
        quantity: parseInt(orderQ)
      };
      setOrderList([...orderList, newOrder]);
      setOrderItem('');
      setOrderQ('');
    }
  };

  const handleAddToNotifList = () => { 
    if (notifItem && notifQ) {
      const newNotif = {
        item: notifItem,
        quantity: parseInt(notifQ)
      };
      setNotifList([...notifList, newNotif]);
      setNotifItem('');
      setNotifQ('');
    }
  };

  const handleEditMenuOpenDialog = () => {
    console.log("Edit Menu Items");
    startMenuItems();
    setOpenEditMenuDialog(true);
  };

  const handleCloseEditMenuDialog = () => {
    console.log("Close Edit Menu Items");
    setOpenEditMenuDialog(false);
  };

  const handleOpenAddOrderDialog = () => {
    console.log("Add Orders");
    startMenuItems();
    setOpenAddOrderDialog(true);
  };

  const handleCloseAddOrderDialog = () => {
    setOpenAddOrderDialog(false);
    setOrderList([]);
  };

  const handleOpenStartDonationDialog = async () => {
    console.log("Start Donation Event");
    await startMenuItems();
    await fetchDonationCenters();
    setOpenStartDonationDialog(true);
  };

  const handleCloseStartDonationDialog = () => {
    console.log("Close Start Donation Event");
    setOpenStartDonationDialog(false);
    setDonationList([]);
    setSelectedCenters([]);
    setDonationItem('');
    setDonationQ('');
  };

  const handleConfirmEdits = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const { data, error } = await sas_db.from('business_info').select('b_id').eq('b_email', userEmail).single();
    console.log(data);
    console.log(newMenuItemsTemp);
    for (const item of newMenuItemsTemp) {
      console.log(item)
      const mealData = {
        m_meal_name: item,
        b_id: data.b_id,
      }
      await sas_db.from('meals').insert([mealData]);
    }
  };

  const handleOrderSubmit = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const { data, error } = await sas_db.from('business_info').select('b_id').eq('b_email', userEmail).single();

    for (const order of orderList) {
      const { data: mItemID, error } = await sas_db.from('meals').select('m_id').eq('m_meal_name', order.item).eq("b_id", data.b_id).single();
      const mealData = {
        m_id: mItemID.m_id,
        b_id: data.b_id,
        o_order_quantity: order.quantity,
        o_order_date_time: new Date().toISOString()
      };
      await sas_db.from('orders').insert([mealData]);
    }

    setOrderList([]);
  };

  const handleNotifSubmit = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const { data, error } = await sas_db.from('business_info').select('b_id').eq('b_email', userEmail).single();

    const { data: mItemID, error2 } = await sas_db.from('meals').select('m_id').eq('m_meal_name', donationItem).eq("b_id", data.b_id).single();
    const businessEvent = {
      b_id: data.b_id,
      be_name: donationEventName,
      be_start_time: new Date().toISOString(),
      be_end_time: new Date().toISOString() + 1,
      m_id: mItemID.m_id,
      be_meal_quantity: donationQ
    };
    const { data: insertedEvent } = await sas_db.from('business_events').insert([businessEvent]).select().single();
    const be_id = insertedEvent.be_id;

    for (let i = 0; i < selectedCenters.length; i++) {

      const { data: donationCenterInfo } = await sas_db.from('donation_center_info').select('d_id').eq('d_name', selectedCenters[i]).single();

      const notification = {
        be_id: be_id,
        n_recipient_type: 'donation_center',
        n_recipient_id: donationCenterInfo.d_id,
        n_ack: false,
        n_date_time: new Date().toISOString(),
      };
      await sas_db.from('notifications').insert([notification]);
    }

    setOrderList([]);
  };


  const fetchChartData = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const { data: businessData } = await sas_db.from('business_info').select('b_id').eq('b_email', userEmail).single();
    console.log(businessData);
    if (businessData) {
      const { data: orderData } = await sas_db.from('orders')
        .select(`
            m_id,
            o_order_quantity, 
            o_order_date_time,
            meals (m_id, m_meal_name)
          `)
        .eq('b_id', businessData.b_id);
      console.log(orderData);
      const formattedData = orderData.reduce((acc, order) => {
        const date = new Date(order.o_order_date_time);
        const month = date.toISOString().slice(0, 7); 

        if (!acc[order.meals.m_meal_name]) {
          acc[order.meals.m_meal_name] = {};
        }

        if (!acc[order.meals.m_meal_name][month]) {
          acc[order.meals.m_meal_name][month] = 0;
        }

        acc[order.meals.m_meal_name][month] += order.o_order_quantity;
        return acc;
      }, {});
      console.log(formattedData);

      setChartData(formattedData);
    }
  };


useEffect(() => {
  sendEmail();

  const fetchData = async () => { 
    console.log("Fetching data...");
    const userEmail = localStorage.getItem('userEmail');
    const { data: businessData, error2 } = await sas_db.from('business_info').select('b_id, b_name').eq('b_email', userEmail).single();
    setBusinessName(businessData.b_name);
  }
  fetchData();
  fetchChartData();
  startMenuItems();
}, []);


const sendOrderData = async (orderPredItem) => {
  try {
    console.log('sendOrderData called with item:', orderPredItem);
    if (!orderPredItem) {
      console.log('No item selected');
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    console.log('Fetching business data for email:', userEmail);
    const { data: businessData, error: businessError } = await sas_db.from('business_info').select('b_id, b_name').eq('b_email', userEmail).single();
    
    if (businessError) {
      console.error('Error fetching business data:', businessError);
      return;
    }

    const { data: mealId, error: mealError } = await sas_db.from("meals").select("m_id").eq("b_id", businessData.b_id).eq("m_meal_name", orderPredItem).single();
    
    if (mealError || !mealId) {
      console.error('Error fetching meal data:', mealError);
      console.log('orderPredItem:', orderPredItem);
      console.log('businessId:', businessData.b_id);
      return;
    }    const requestData = {
        user_id: businessData.b_id.toString(),
        meal_id: mealId.m_id.toString()
    };
    
    console.log('Sending prediction request with data:', requestData);
    const response = await fetch("http://127.0.0.1:8000/forecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Received prediction response:', data);
    
    if (!Array.isArray(data)) {
      console.error('Expected array response from forecast API, got:', typeof data);
      console.log( data);
      return;
    }
    
    setForecast(data);
    const newForecastR = data.map(item => item.Forecast);
    console.log('Processed forecast data:', newForecastR);
    setForecastR(newForecastR);
  } catch (error) {
    console.error('Error in sendOrderData:', error);
  }
};

  return (
    <>
      <NavBarBusiness name="businesses" />
      <div className="dashboard-container">
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "2rem"
          }}
        >
          {businessName} Dashboard
        </Typography>
        <div className="dashboard-card">          
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: "600",
              marginBottom: "1.5rem",
              textAlign: "center"
            }}
          >
            Order Prediction
          </Typography>
          
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Menu Item for Prediction</InputLabel>
            <Select
              value={orderPredictionItem}
              onChange={(e) => {
                setOrderPredictionItem(e.target.value);
                sendOrderData(e.target.value);
              }}
              label="Select Menu Item for Prediction"
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {forecast.length > 0 && (
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
              series={[
                {
                  data: forecastR,
                },
              ]}
              height={300}
              sx={{
                '.MuiLineChart-root': {
                  backgroundColor: 'var(--card-background)',
                  borderRadius: '12px',
                  padding: '16px'
                }
              }}
            />
          )}
          
        </div>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
          <Button variant="contained" onClick={handleEditMenuOpenDialog}>
            Edit Menu Items
          </Button>
          <Button variant="contained" onClick={handleOpenAddOrderDialog}>
            Add Orders
          </Button>
          <Button variant="contained" onClick={handleOpenStartDonationDialog}>
            Notify Donation Center
          </Button>
        </Box>

        <Dialog open={openEditMenuDialog} onClose={handleCloseEditMenuDialog} maxWidth="sm" fullWidth>
          <DialogTitle>Edit Menu Items</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mb: 2, mt: 1 }}>
              <InputLabel>Current Menu Items</InputLabel>
              <Select
                native
                value=""
                label="Current Menu Items"
                inputProps={{
                  readOnly: true
                }}
              >
                <option value="" disabled></option>
                {menuItems.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                fullWidth
                label="New Menu Item"
                value={newMenuItems}
                onChange={(e) => setNewMenuItems(e.target.value)}
                variant="outlined"
              />
              <Button
                variant="contained"
                onClick={handleAddMenuItem}
                sx={{ minWidth: '120px', maxHeight: '55px' }}
              >
                Add Item
              </Button>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              handleCloseEditMenuDialog(); setNewMenuItemsTemp([]);
              setNewMenuItems('');
            }}>Cancel</Button>
            <Button
              onClick={() => {
                handleConfirmEdits();
                handleCloseEditMenuDialog();
              }}
              variant="contained"
            >
              Confirm Edits
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openAddOrderDialog} onClose={handleCloseAddOrderDialog} maxWidth="sm" fullWidth>
          <DialogTitle>Add Orders</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mb: 2, mt: 1 }}>
              <InputLabel>Select Menu Item</InputLabel>
              <Select
                id="orderItem"
                native
                value={orderItem}
                onChange={(e) => setOrderItem(e.target.value)}
                label="Select Menu Item"
              >
                <option value="" disabled></option>
                {menuItems.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                fullWidth
                label="Order Quantity"
                id="orderQuantity"
                value={orderQ}
                onChange={(e) => setOrderQ(e.target.value)}
                variant="outlined"
                type="number"
              />
              <Button
                variant="contained"
                onClick={handleAddToOrderList}
                sx={{ minWidth: '120px', maxHeight: '55px' }}
              >
                Add Order
              </Button>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddOrderDialog}>Cancel</Button>
            <Button
              onClick={() => {
                handleOrderSubmit();
                fetchChartData();
                handleCloseAddOrderDialog();

              }}
              variant="contained"
            >
              Confirm Orders
            </Button>
          </DialogActions>
        </Dialog>



        <Dialog open={openStartDonationDialog} onClose={handleCloseStartDonationDialog} maxWidth="sm" fullWidth>
          <DialogTitle>Start Donation Event</DialogTitle>
          <DialogContent>

            <TextField
              fullWidth
              label="Donation Event Name"
              id="donationEventName"
              value={donationEventName}
              onChange={(e) => setDonationEventName(e.target.value)}
              variant="outlined"
              type="text"
            />

            <FormControl fullWidth sx={{ mb: 2, mt: 1 }}>
              <InputLabel>Select Menu Item</InputLabel>
              <Select
                native
                value={donationItem}
                onChange={(e) => setDonationItem(e.target.value)}
                label="Select Menu Item"
              >
                <option value="" disabled></option>
                {menuItems.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                fullWidth
                label="Donation Quantity"
                value={donationQ}
                onChange={(e) => setDonationQ(e.target.value)}
                variant="outlined"
                type="number"
              />
            </Box>

            {donationList.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Items to donate:</Typography>
                {donationList.map((item, index) => (
                  <Typography key={index} variant="body2">
                    {item.item}: {item.quantity} servings
                  </Typography>
                ))}
              </Box>
            )}

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Select Donation Centers</InputLabel>
              <Select
                multiple
                value={selectedCenters}
                onChange={(e) => setSelectedCenters(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                {donationCenters.map((center) => (
                  <MenuItem key={center.d_id} value={center.d_name}>
                    {center.d_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseStartDonationDialog}>Cancel</Button>
            <Button
              onClick={() => {
                setDonationList([...donationList, { item: donationItem, quantity: parseInt(donationQ) }]);
                handleNotifSubmit();
                handleCloseStartDonationDialog();
                setDonationItem('');
                setDonationQ('');
                setDonationEventName('');
              }}
              variant="contained"
              sx={{ color: 'white' }}
              disabled={selectedCenters.length === 0}
            >
              Notify Donation Centers
            </Button>
          </DialogActions>
        </Dialog>


 <div className="dashboard-card" style={{ marginTop: '1.5rem' }}>
     
        <Box sx={{
          p: 3,
          m: 2,
          maxWidth: 800,
          mx: 'auto',
          marginBottom: '1px'
        }}>
         <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: "600",
              marginBottom: "1.5rem",
              textAlign: "center"
            }}
          >Order History Per Menu Item</Typography>


        </Box>
        {Object.keys(chartData).length > 0 && (
          <LineChart
            xAxis={[{
              data: [...new Set(Object.values(chartData).flatMap(item => Object.keys(item)))].sort(),
              scaleType: 'band'
            }]}
            series={Object.entries(chartData).map(([mealName, monthData]) => ({
              data: [...new Set(Object.values(chartData).flatMap(item => Object.keys(item)))]
                .sort()
                .map(month => monthData[month] || 0),
              label: `${mealName}`

            }))}
            height={300}
          />
        )}
   </div>
      </div>
      {forecast.length > 0 && (
        <h5>{!isNaN(Number(forecast[2].Forecast)) ? Number(forecast[2].Forecast).toFixed(2) : 'N/A'}</h5>
      )}


    </>
  );
}

export default Businessdash;