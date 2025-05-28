import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from "./mainnavbar";
import './styles/global.css';
import './styles/MainPage.css';
import Divider from "@mui/material/Divider"


function MainPage() {
    return (
        <>
            <NavBar />
            <div className="main-container" style={{ height: "100hv" }}>
                <Typography
                    variant="h4"
                    sx={{ marginBottom: "2rem", color: "text.secondary" }}>
                    Connecting Surplus Servings With Those In Need
                </Typography>
                <Divider sx={{ paddingBottom: "2px", borderBottomWidth: 5 }}></Divider>
                <Box sx={{ paddingTop: "20px", marginBottom: "4rem" }}>
                    <Typography variant="h6" paragraph>
                        Using AI-powered predictions to reduce food waste and fight hunger.
                    </Typography>
                    <Box sx={{ bgcolor: "#F8F8F8", borderRadius: 2, width: 1140, p: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: "Bold" }} paragraph>
                            We help restaurants predict incoming food demand, so that they can reduce food waste and save on operational costs. When business have surplus food, we allow them to easily donate it to local food banks and shelters.
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "Bold" }} paragraph>
                            Our passionate volunteers are the backbone of our community, helping bridge the gap between surplus food and those in need.
                        </Typography>
                    </Box>
                </Box>
                <Box justifyContent={"center"} display="flex" >
                    <Grid container spacing={4} sx={{ marginBottom: "4rem" }}>
                        <Grid item xs={12} md={2}>
                            <Box maxWidth={"320px"} sx={{ p: 3, bgcolor: '#F8F8F8', borderRadius: 2 }}>
                                <Typography variant="h4" color="#5CAB7F" sx={{ marginBottom: 1 }}>
                                    40%
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "Bold" }}>
                                    of food in the US goes to waste annually
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box minWidth={"320px"} sx={{ p: 3, bgcolor: '#F8F8F8', borderRadius: 2 }}>
                                <Typography variant="h4" color="#5CAB7F" sx={{ marginBottom: 1 }}>
                                    34M
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "Bold" }}>
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