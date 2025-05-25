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

function Doncendash() {
    const [notifications, setNotifications] = useState([]);
    const [centerName, setCenterName] = useState('');

    const fetchNotifications = async () => {
        console.log('Fetching notifications...');
        const userEmail = localStorage.getItem('userEmail');
        const { data: centerData } = await sas_db.from('donation_center_info')
            .select('d_id')
            .eq('d_email', userEmail)
            .single();
        if (centerData) {
            const { data: notifData } = await sas_db.from('notifications')
                .select(`
                    *,
                    business_events (
                        be_name,
                        be_meal_quantity,
                        meals (
                            m_meal_name
                        )
                    )
                `)
                .eq('n_recipient_id', centerData.d_id)
                .order('n_date_time', { ascending: false });

            setNotifications(notifData || []);
        }
    };

    const handleAcknowledge = async (notificationId, newStatus) => {
        await sas_db.from('notifications')
            .update({ n_ack: newStatus })
            .eq('n_id', notificationId);

        fetchNotifications();
        const userEmail = localStorage.getItem('userEmail');
        const { data: be_id2 } = await sas_db.from('notifications').select('be_id').eq('n_id', notificationId).single();
        const { data: centerData } = await sas_db.from('donation_center_info')
            .select('d_id')
            .eq('d_email', userEmail)
            .single();
        const be_id = be_id2.be_id;
        const { data: volunteerIds } = await sas_db.from('volunteer_info').select('v_id');
        const { data: businessData } = await sas_db.from('business_events').select('b_id').eq('be_id', be_id).single();
        if (newStatus) {
            for (let i = 0; i < volunteerIds.length; i++) {
                const notification = {
                    be_id: be_id,
                    vn_recipient_type: 'volunteer',
                    vn_recipient_id: volunteerIds[i].v_id,
                    vn_ack: false,
                    vn_date_time: new Date().toISOString(),
                    d_id: centerData.d_id,
                    b_id: businessData.b_id,
                };
                await sas_db.from('volunteer_notifications').insert([notification]);
            }
        }

    };


    
    useEffect(() => { async function fetchData() {
        const userEmail = localStorage.getItem('userEmail');
            const { data: centerData, error2 } = await sas_db.from('donation_center_info').select('d_id, d_name').eq('d_email', userEmail).single();
            setCenterName(centerData.d_name);
        }
        fetchData();
        fetchNotifications();
    }, []);

    return (
        <>
            <NavBarBusiness name="donation centers"/>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                    {centerName} Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Pending Donations
                            </Typography>
                            {notifications
                                .filter(notif => !notif.n_ack)
                                .map((notif) => (
                                    <Card key={notif.n_id} sx={{ mb: 2 }}>
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
                                                Date: {new Date(notif.n_date_time).toLocaleDateString()}
                                            </Typography>
                                            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleAcknowledge(notif.n_id, true)}
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() => handleAcknowledge(notif.n_id, false)}
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
                                Accepted Donations
                            </Typography>
                            {notifications
                                .filter(notif => notif.n_ack)
                                .map((notif) => (
                                    <Card key={notif.n_id} sx={{ mb: 2 }}>
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
                                                Date: {new Date(notif.n_date_time).toLocaleDateString()}
                                            </Typography>
                                            <Box sx={{ mt: 2 }}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() => handleAcknowledge(notif.n_id, false)}
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

export default Doncendash;