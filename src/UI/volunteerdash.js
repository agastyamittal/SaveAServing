import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { sas_db } from '../DB/dbClient';
import NavBarBusiness from './NavBarBusiness';
import './styles/global.css';
import './styles/dashboard.css';
import './styles/buttons.css';
import './styles/buttons.css';
import './styles/global.css';
import './styles/volunteer.css';

function Volunteerdash() {
    const [notifications, setNotifications] = useState([]);
    const [volunteerName, setVolunteerName] = useState('');

    const fetchNotifications = async () => {
        console.log('Fetching notifications...');
        const userEmail = localStorage.getItem('userEmail');
        const { data: volunteerData } = await sas_db.from('volunteer_info')
            .select('v_id')
            .eq('v_email', userEmail)
            .single();
        if (volunteerData) {
            console.log(volunteerData.v_id);
            console.log('Fetching notifications for volunteer...');
            const { data: allData } = await sas_db.from('volunteer_notifications')
                .select(`
                    *,
                    business_events (
                        be_name,
                        be_meal_quantity,
                        be_id,
                        meals (
                            m_meal_name
                        )
                    ),
                    donation_center_info (
                        d_name,
                        d_zip_code,
                        d_house_number,
                        d_street_name
                    ),
                    business_info (
                        b_name,
                        b_zip_code,
                        b_house_number,
                        b_street_name
                    )
                `)
                .eq('vn_recipient_id', volunteerData.v_id)
                .order('vn_date_time', { ascending: false });
            console.log(allData);

            setNotifications(allData || []);
        }
    };

    const handleAcknowledge = async (notificationId, newStatus) => {
        await sas_db.from('volunteer_notifications')
            .update({ vn_ack: newStatus })
            .eq('vn_id', notificationId);

        fetchNotifications();
    };

    useEffect(() => {async function fetchData() {
        const userEmail = localStorage.getItem('userEmail');
            const { data: volunteerData, error2 } = await sas_db.from('volunteer_info').select('v_id, v_name').eq('v_email', userEmail).single();
            setVolunteerName(volunteerData.v_name);
        }
        fetchData();
        fetchNotifications();
    }, []);

    return (
        <>
            <NavBarBusiness name="volunteers" />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                    {volunteerName} Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Available Volunteer Opportunities
                            </Typography>
                            {notifications
                                .filter(notif => !notif.vn_ack)
                                .map((notif) => (
                                    <Card key={notif.vn_id} sx={{ mb: 2 }}>
                                        <CardContent>
                                            <Typography variant="h6">
                                                {notif.business_events.be_name}
                                            </Typography>
                                            <Typography>
                                                Item: {notif.business_events.meals.m_meal_name}
                                            </Typography>
                                            <Typography>
                                                Quantity: {notif.business_events.be_meal_quantity} servings
                                            </Typography>
                                            <Typography>
                                                From: {notif.donation_center_info.d_name} - {notif.donation_center_info.d_zip_code} {notif.donation_center_info.d_house_number} {notif.donation_center_info.d_street_name}
                                            </Typography>
                                            <Typography>
                                                To: {notif.business_info.b_name} - {notif.business_info.b_zip_code} {notif.business_info.b_house_number} {notif.business_info.b_street_name}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                Date: {new Date(notif.vn_date_time).toLocaleDateString()}
                                            </Typography>
                                            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleAcknowledge(notif.vn_id, true)}
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() => handleAcknowledge(notif.vn_id, false)}
                                                >
                                                    Decline
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Accepted Opportunities
                            </Typography>
                            {notifications
                                .filter(notif => notif.vn_ack)
                                .map((notif) => (
                                    <Card key={notif.vn_id} sx={{ mb: 2 }}>
                                        <CardContent>
                                            <Typography variant="h6">
                                                {notif.business_events.be_name}
                                            </Typography>
                                            <Typography>
                                                Item: {notif.business_events.meals.m_meal_name}
                                            </Typography>
                                            <Typography>
                                                Quantity: {notif.business_events.be_meal_quantity} servings
                                            </Typography>
                                            <Typography color="textSecondary">
                                                Date: {new Date(notif.vn_date_time).toLocaleDateString()}
                                            </Typography>
                                            <Box sx={{ mt: 2 }}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() => handleAcknowledge(notif.vn_id, false)}
                                                >
                                                    Cancel Acceptance
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Volunteerdash;