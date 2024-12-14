import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Stack } from "@mui/material";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './swiper.css';
// import '../hero/iconSection/';
// import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";

function Home() {
    const [t] = useTranslation()
    const theme = useTheme()

    const mySwiper = [{
        Text: t(`Glassware
  `), PathPhoto: "/images/home/dink.jpg"
    },
    {
        Text: t(`Cast lron
  `), PathPhoto: "/images/home/pizza.jpg"
    },
    {
        Text: t(`PolyCarbonate
  `), PathPhoto: "/images/home/Felli_Home-and-Heart_15-2.jpg"
    },
    {
        Text: t(`Chinaware
  `), PathPhoto: "/images/home/Kulsan_Home-and-Heart_catering-900x600.jpg"
    },
    {
        Text: t(`Buffet Section
  `), PathPhoto: "/images/home/Senza-titolo-5-Recuperato.jpg"
    },
    ]

    return (
        <>

            <Box>


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
                                style={{
                                    position: "relative",
                                    display: "flex",
                                    width: "100%",
                                    height: "514px",

                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: `url(${one.PathPhoto})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        // opacity: .5,
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
                                        },
                                    }}
                                >

                                    <Typography variant={"h2"} fontSize={"84px"} fontWeight={'bold'}
                                        color={'#fff'}
                                        fontFamily={'c'}>
                                        {one.Text}
                                    </Typography>

                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
            {/* <Stack> */}
            <Box
                sx={{
                    py: 1,
                    position: "relative",
                    display: "flex",
                    width: "100%",
                    height: "100vh",

                    // height: "650px",
                    // height: "100%",
                    // py:5,


                }}
            >

                <Box
                    sx={{
                        py: 5,

                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "600px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // opacity: .5,
                        zIndex: 1,
                    }}
                >

                    <img width={'100%'} height={'137%'} src="\images\shutterstock-1870x770.png" />
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        zIndex: 2,
                        [theme.breakpoints.up("sm")]: {
                            left: 60,
                            top: 150,
                            maxWidth: "44%",
                            textAlign: "start",
                        },
                        [theme.breakpoints.down("sm")]: {
                            py: 5,
                        },
                    }}
                >

                    <Typography variant={"h3"} fontSize={"44"} fontWeight={'bold'}
                        color={`${theme.palette.mode === "dark" ? '#fff' : "#000"}`}
                        fontFamily={'c'}>
                        Customer First, Service Foremost.
                    </Typography>
                    <Typography variant={"body1"} fontSize={"22px"} 
                        color={`${theme.palette.mode === "dark" ? '#fff' : "#000"}`}
                        fontFamily={'c'}>
                        At Home & Heart, we seek perfection every day. We choose the brands we distribute on basis of excellent quality, good reputability, and reasonable prices too.
                    </Typography>
                    <Typography  mt={5} variant={"body1"} fontSize={"33"} fontWeight={'bold'}
                        color={`${theme.palette.mode === "dark" ? '#fff' : "#000"}`}
                        fontFamily={'c'}>
                        <Link >
                        Browse Collection
                        </Link>
                    </Typography>

                </Box>
            </Box>
            {/* </Stack> */}

        </>
    )
}

export default Home
