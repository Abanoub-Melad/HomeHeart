import { Grid, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { Link } from "react-router-dom";

function ContactUs() {


  return (
    <>

<Stack>
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        zIndex: 1,  // تخفيض Z-index ليظهر المحتوى فوق الصورة
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ height: { xs: '690px', sm: '100vh' } }}>
        <img
          src="/images/Bento-server-2820.jpg"
          alt="Bento Server"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>

    <Box
      sx={{
        position: "absolute",
        zIndex: 2,
        top: { xs: '100px', sm: '190px' },  // تعديل الموقع بناءً على حجم الشاشة
        left: { xs: 0, sm: 100 },
        width: { xs: '100%', sm: '44%' },  // تغيير العرض بين الشاشات الصغيرة والكبيرة
        textAlign: 'start',  // محاذاة النص
        px: { xs: 2, sm: 0 },  // المسافات الداخلية
        py: { xs: 5, sm: 0 },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'c',
          fontSize: { xs: '20px', sm: '25px' },
          color: '#fff'
        }}
      >
        Wanna chat?
      </Typography>
      <Typography
        sx={{
          fontFamily: 'c',
          fontWeight: 'bold',
          fontSize: { xs: '30px', sm: '40px' },
          color: '#fff'
        }}
      >
        Send us your feedback
      </Typography>
      <Typography
        sx={{
          fontFamily: 'c',
          fontWeight: 'bold',
          fontSize: { xs: '30px', sm: '40px' },
          color: '#fff'
        }}
      >
        We love hearing it!
      </Typography>
    </Box>
  </Box>
</Stack>

      <Grid
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 ,py:3}}
        container  >
        <Grid item xs={12} md={6} lg={6}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=31.316%2C30.091%2C31.321%2C30.095"
            style={{ width: "100%", height: "350px", border: "none" }}
            title="Map"
          ></iframe>
        </Grid>

        <Grid item xs={12} md={6} lg={5} padding={2}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Head Office
            </Typography>
            <Typography gutterBottom>14 El Zohour St., Hedico Bldgs, Off Salah Salem st.</Typography>
            <Typography mb={2}>Heliopolis, Cairo, Egypt</Typography>
            <Typography color={'red'}>

              <Link href="mailto:info@homeandheart.com.eg" color="error">
                info@homeandheart.com.eg
              </Link>
            </Typography>
            <Typography gutterBottom>Tel: +202-22684192/4</Typography>
            <Typography gutterBottom>Fax: +202-22684196</Typography>
            <Typography gutterBottom>Mobile: +20129200909 / +201282333880</Typography>
          </Box>


        </Grid>

        {/* Show Room Alexandria */}

      </Grid>


      <Grid container p={4}>
        <Grid item xs={12} md={6} lg={6} py={2}>
          <Box >
            <Typography variant="h6" gutterBottom>
              Show Room (cairo)
            </Typography>
            <Typography py={1}>1 Mohamed Saiid Elhalawanyst., HedicoBldgs, Off Salah Salem st.</Typography>
            <Typography >Heliopolis, Cairo, Egypt.</Typography>
            <Typography color={'red'}>

              <Link href="info@homeandheart.com.eg" color="error">
                info@homeandheart.com.eg
              </Link>
            </Typography>

            <Typography pt={3}>Tel: +202-22686907	</Typography>
            <Typography >Fax: +202-22684196</Typography>
            <Typography >Mobil +20129200909/ +201282333880</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} py={2}>
          <Box >
            <Typography variant="h6" gutterBottom>
              Show Room (Alexandria)
            </Typography>
            <Typography py={1}>Mall 17, Marina Entrance no 5.</Typography>
            <Typography color={'red'}>


              <Link href="mailto:info@homeandheart.com.eg" color="error">
                info@homeandheart.com.eg
              </Link>
            </Typography>
            <Typography pt={3}>Tel: +204-64452358</Typography>
            <Typography >Fax: +202-22684196</Typography>
            <Typography >Mobile: +20129200909 / +201282333880</Typography>
          </Box>
        </Grid>
      </Grid>

    </>

  );

}

export default ContactUs
