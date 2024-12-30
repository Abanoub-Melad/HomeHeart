import { Typography } from "@mui/material"
import { Box, useMediaQuery, useTheme } from "@mui/system"
import { Grid, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import {  motion } from "framer-motion";
import  imgeChina from "./../../../public/images/home/Kulsan_Home-and-Heart_catering-900x600.jpg";

function Chinaware() {
    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <>
    <Box sx={{ height: '100vh' }}>

        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${imgeChina})`,
                // backgroundImage: `url(/public/images/home/Kulsan_Home-and-Heart_catering-900x600.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
            }}
        />

        <Box
            sx={{

                position: "absolute",
                zIndex: 2,
                [theme.breakpoints.up("sm")]: {
                    left: 60,
                    bottom: 50,
                    maxWidth: "44%",
                    textAlign: "start",
                },
                [theme.breakpoints.down("sm")]: {
                    py: 5,
                    left: 20,
                    bottom: 50,
                },
            }}
        >

            <Typography
                fontSize={isMobile ? '33px' : '99px'}
                variant={"h2"}
                fontWeight={'bold'}
                color={'#fff'}
                fontFamily={'c'}
            >
                Glassware        </Typography>

        </Box>
    </Box>


    <motion.div
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
    >

        <Grid container spacing={2} sx={{ padding: { md: '25px', xs: '20px' } }}>
            <Grid item xs={12} sm={6} md={8}>
                <Card className="card" component={Link} to="/bormioli-products"
                    sx={{ textDecoration: 'none', position: 'relative', }}>
                    <CardMedia height={'260px'}  component="img" image='../../../public\images\Horeca\Chinaware\Churcill-1-1.jpg' alt="Bormioli Products" />
                    <Box className="card-box"

                    >
                        <Typography variant="body2">Glassware</Typography>
                        <Typography variant="h6">Bormioli Products</Typography>
                    </Box>
                </Card>
            </Grid>



            <Grid item xs={12} sm={6} md={4}>
                <Card className="card" component={Link} to="/myglassstudio" sx={{ textDecoration: 'none', position: 'relative' }}>
                    <CardMedia height={'300px'} component="img" image="../../../public\images\Horeca\Chinaware\logo-1.png" alt="MyGlassStudio" />
                    <Box className="card-box">
                        <Typography variant="body2">Glassware</Typography>
                        <Typography variant="h6">MyGlassStudio</Typography>
                    </Box>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Card className="card" component={Link} to="/3d-glassware" sx={{ textDecoration: 'none', position: 'relative' }}>
                    <CardMedia height={'300px'} component="img" image="../../../public\images\Horeca\Chinaware\Minhlong-1.jpg" alt="3D Glassware" />
                    <Box className="card-box">
                        <Typography variant="body2">Glassware</Typography>
                        <Typography variant="h6">3D Glassware</Typography>
                    </Box>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Card className="card" component={Link} to="/riedel" sx={{ textDecoration: 'none', position: 'relative' }}>
                    <CardMedia height={'300px'} component="img" image="../../../public\images\Horeca\Chinaware\Nanawa-1-2.jpg" alt="Riedel" />
                    <Box className="card-box" >
                        <Typography variant="body2">Glassware</Typography>
                        <Typography variant="h6">Riedel</Typography>
                    </Box>
                </Card>
            </Grid>

        </Grid>
    </motion.div>

</>
  )
}

export default Chinaware
