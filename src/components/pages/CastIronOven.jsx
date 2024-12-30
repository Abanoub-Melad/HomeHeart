import { Typography } from "@mui/material"
import { Box, useMediaQuery, useTheme } from "@mui/system"
import { Grid, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import {  motion } from "framer-motion";
import   imagePizza  from "..//../../public/images/home/pizza.jpg";
import   imageCast  from "../../../public/images/Horeca/Cast Iron Comps/lava_new_product_1c.jpg";
// import   imageCast  from "./../../../public/images/Horeca/Cast Iron Comps/lava_new_product_1c.jpg";

function CastIronOven() {
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
                backgroundImage: `url(${imagePizza})`,
                // backgroundImage: `url(/public/images/home/pizza.jpg)`,
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
                Cast Iron        </Typography>

        </Box>
    </Box>


    <motion.div
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
    >

        <Grid container spacing={2} sx={{ padding: { md: '25px', xs: '20px' } }}>
           
            <Grid item xs={12} sm={6} md={8}>
                <Card className="card" component={Link} to="/riedel" sx={{ textDecoration: 'none', position: 'relative' }}>
                    <CardMedia height={'300px'} component="img" image={`${imageCast}`} alt="Riedel" />
                    {/* <CardMedia height={'300px'} component="img" image="./public\images\Horeca\Cast Iron Comps\lava_new_product_1c.jpg" alt="Riedel" /> */}
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

export default CastIronOven
