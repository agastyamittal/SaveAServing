import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from "./mainnavbar";
import './styles/global.css';
import './styles/MainPage.css';

function MainPage(){    return (
        <>
            <NavBar/>
            <div className="main-container">
                <Typography 
                    variant="h4" 
                    sx={{ marginBottom: "2rem",color: "text.secondary"}}>
                    Connecting Surplus Servings With Those In Need
                </Typography>
                <Box sx={{ marginBottom: "4rem" }}>
                    <Typography variant="h6" paragraph>
                        Using AI-powered predictions to reduce food waste and fight hunger.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We help restaurants predict incoming food demand, so that they can reduce food waste and save on operational costs. When business have surplus food, we allow them to easily donate it to local food banks and shelters. 
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our passionate volunteers are the backbone of our community, helping bridge the gap between surplus food and those in need.
                    </Typography>
                </Box>
<Box justifyContent={"center"} display="flex" >
                <Grid container spacing={4} sx={{ marginBottom: "4rem" }}>
                    <Grid item xs={12} md={2}>
                        <Box maxWidth={"300px"} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                            <Typography variant="h4" color="primary" sx={{ marginBottom: 1 }}>
                                40%
                            </Typography>
                            <Typography variant="body1">
                                of food in the US goes to waste annually
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box minWidth={"300px"}sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                            <Typography variant="h4" color="primary" sx={{ marginBottom: 1 }}>
                                34M
                            </Typography>
                            <Typography variant="body1">
                                Americans face food insecurity
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
</Box>
                
            </div>
        </>
    );
}
export default MainPage;