import { Grid, Typography } from '@mui/material'
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
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function WhoWeAre() {
  const theme = useTheme()
  const [t] = useTranslation()

  const mySwiper = [{
    Text: t(`Home & Heart, is operating in the Egyptian market since 1999,
`), PathPhoto: "./images/about-us-2.jpg"
    // `), PathPhoto: "./images/banner-15.jpg"
  },
  {
    Text: t(`Home & Heart, is operating in the Egyptian market since 1999,
`), PathPhoto:  "/images/home/Senza-titolo-5-Recuperato.jpg" 
  },
  {
    Text: t(`Chinaware
`), PathPhoto: "/images/home/Kulsan_Home-and-Heart_catering-900x600.jpg"    },
  
  ]

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden", // تجنب أي تجاوزات غير مطلوبة
        }}
      >


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
                  height: "100vh",
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',

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
                    opacity: .5,
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    [theme.breakpoints.up("sm")]: {
                      left: 60,
                      top: 170,
                      maxWidth: "44%",
                      textAlign: "start",
                    },
                    [theme.breakpoints.down("sm")]: {
                      py: 5,
                    },
                  }}
                >

                  <Typography variant={"h2"} fontSize={"44px"} fontWeight={'bold'}
                    //  sx={{ color: theme.palette.mode === "light" ? "#000" : "#fff" }}
                    color={'#fff'}
                    fontFamily={'c'}>
                    Home & Heart, is operating in the Egyptian market since 1999,
                  </Typography>
                  <Typography variant={"body1"} fontSize={"29px"} fontFamily={'c'}
                    // sx={{ color: theme.palette.mode === "light" ? "#000" : "#fff" }}
                    color={'#fff'}
                    >
                    {t(` As Hotelware Distributor, Giftware, and Home Accessories.`)}
                  </Typography>
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>


      <motion.div
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >


        <Box

          sx={{
            py: 10,
            textAlign: "center",
          }}

        >
          <Grid container >
            <Grid item xs={12} sm={12} lg={12}
              component={motion.section}
            >
              <Box >

                <Typography variant="h2"
                  component={motion.section}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                  fontFamily={"cab"}
                  fontSize={'44px'}
                  fontWeight={'bold'}
                >Concerning Hotelware concept by
                </Typography>
                <Typography variant="p"
                  fontSize={'30px'}
                  fontFamily={"c"}
                  fontWeight={'bold'}


                >

                  HOME & HEART
                </Typography>
              </Box>
              <Grid item xs={12} sm={10} lg={7}
                sx={{ margin: 'auto', textAlign: "start", paddingY: '50px' }}
              >

                <Box>

                  <Typography variant="body1"
                    fontSize={'18px'}
                    fontFamily={"c"}

                  >

                    We specialize in supplying hotels and resorts with glassware, polycarbonate and acrylic and melamine Table ware, chinaware, buffetware, action stations, Mixology & Mobile Banqueting Furniture, flatware silverware and holloware,cast iron buffet and kitchenware, bar accessories. Also, we export Egyptian cotton products such as tablecloth, napkins, bath towels, and linen to hotels in Europe and the Arab World.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={10} lg={5}
                sx={{ margin: 'auto', textAlign: "center" }}
              >

                <Box>

                  <Typography variant="body1"
                    sx={{
                      fontSize: '18px',
                      fontFamily: "c",
                    }}


                  >

                    At Home & Heart, we seek perfection every day. We choose the
                    brands we distribute on basis of excellent quality, good reputability, and
                    reasonable prices too.
                  </Typography>
                </Box>
              </Grid>


            </Grid>
          </Grid>
        </Box>
      </motion.div>



    </>
  )
}

export default WhoWeAre
