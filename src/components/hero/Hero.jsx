// import { Box, Link, Typography, Button } from "@mui/material";
// import { Container } from "@mui/material";
// import { Stack } from "@mui/material";
// import aa from "./img"
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
// import { Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Card from '../main/Card'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';
import CardProduct from '../main/Card';
// import { useTheme } from "@emotion/react";
// import IconSec from "./iconSection/IconSec";
// import { useTranslation } from "react-i18next";


function Hero() {
    // const theme = useTheme()
    // const [t] = useTranslation()
    
    // const mySwiper = [{ Text: t(`mean`), PathPhoto: "./images/banner-15.jpg" },
    //                     { Text: t(`women`), PathPhoto: "./images/banner-25.jpg" },]
    return (
        <>
        {/* <Card/> */}
        <CardProduct/>
            {/* <Container >
                    <Box   sx={{
                display: "flex",
                alignItems: "center",
                py: 6,
                gap: 1,
            }}>

            
                <Swiper
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >   
                    {mySwiper.map((one) => {
                        return (
                            <SwiperSlide   
                                key={one}
                                sx={{ position: 'relative' }}
                            >  <img src={one.PathPhoto} alt="" loading="lazy" decoding="async"/>
                                <Box
                                    sx={{
                                        [theme.breakpoints.up('sm')]: {
                                            position: 'absolute', left: 60, color: "#000", textAlign: "start"
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            py: 5
                                        },
                                    }}>
                                    <Typography variant={"h4"} fontSize={"30px"} 
                                    color={"#333"}>
                                        {t(`titlhero`)}
                                        
                                    </Typography>
                                    <Typography variant={"h1"} fontSize={"60px"} color={"#333"}>
                                        {one.Text}
                                    </Typography>
                                    <Typography variant={"h4"} fontSize={"30px"} color={"#333"} mr={1}>
                                    {t(`sale`)} <Typography
                                            sx={{ color: " #D23F57" }}
                                            variant={"span"} fontSize={"30px"}>{t(`of`)}</Typography>
                                    </Typography>
                                    <Typography variant={"body1"} sx={{ fontWeight: 300, my: 1, color: "#000" }}>
                                    {t(`get`)}
                                    </Typography>
                                    <Button
                                        sx={{
                                            px: 5,
                                            py: 1,
                                            pt: 2,
                                            mt: 2,
                                            color: "#fff",
                                            backgroundColor: "#222",
                                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            borderRadius: "1px",
                                            ":hover": {
                                                bgColor: "#151515",
                                                boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                                            }
                                        }}
                                        variant="contained"
                                    >
                                        {t(`shopNow`)}
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1} sx={{ display: { xs: "none", md: "block", minWidth: "26.7%" } }}>
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img width={"100%"} src=".\images\banner-17.jpg" alt="" loading="lazy" decoding="async"/>
                        <Stack sx={{ position: "absolute", left: "7%", top: "30%" }}>
                            <Typography
                                variant="caption"
                                sx={{ fontSize: "18px", color: "#203445" }}
                            >
                               {t(`newarr`)}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: "18px",
                                    color: "#203445",
                                    mt: 1,
                                    lineHeight: "16px",
                                }}
                            >
                                 {t(`summer`)}
                            </Typography>
                            <Typography variant="h6" sx={{ color: "#203445" }}>
                            {t(`sale20`)}
                            </Typography>
                            <Link
                                sx={{
                                    color: "#203445",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    transition: "0.3s",
                                    ":hover": { color: "#023f57" },
                                }}
                                underline="none"
                                href=""
                            >
                                    {t(`shopNow`)}
                                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                            </Link>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <img width={"100%"} src=".\images\banner-16.jpg" alt="" loading="lazy" decoding="async"/>
                        <Stack sx={{ position: "absolute", left: "7%", top: "30%" }}>
                            <Typography
                                variant="caption"
                                sx={{ fontSize: "18px", color: "#203445" }}
                            >
                                    {t(`gaming`)}
                                
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: "18px",
                                    color: "#203445",
                                    mt: 1,
                                    lineHeight: "16px",
                                }}
                            >
                                                                    {t(`lap`)}

                            </Typography>
                            <Typography variant="h6" sx={{ color: "#203445" }}>
                            {t(`sale20`)}
                            </Typography>
                            <Link
                                sx={{

                                    color: "#203445",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    transition: "0.3s",
                                    ":hover": { color: "#023f57" },
                                }}
                                underline="none"
                                href=""
                            >
                                {t(`shopNow`)}
                                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
                </Box>

            <IconSec />
            </Container > */}

        </>
    );
}

export default Hero;


