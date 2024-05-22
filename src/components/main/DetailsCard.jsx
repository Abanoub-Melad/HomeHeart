import { Button, Typography, Rating, Grid } from "@mui/material";
import { Box } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useGetProductByNameQuery } from "../../Rudex/Product";
import { useMyStore } from "../context/CartShopping";
import Paper from "@mui/material/Paper";

import Skeleton from "@mui/material/Skeleton";

function DetailsCard() {
  const { gitID,   renderData   , increaseCartQuantity} = useMyStore();
  const { data, error, isLoading } = useGetProductByNameQuery(
    `products/${gitID}`
  );
console.log("data", data)
console.log("renderData", renderData)
  if (isLoading) {
    return (
      <>
        <Paper
      sx={{
        ".MuiPaper-root" : {maxWidth: '0px' },
        overflow: "auto",
        display: "flex",
        width: "700px",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={4}
          padding={{ xs: 3, md: 0 }}
          overflow="hidden"
        >
          <Grid item xs={12} md={4} marginTop={{ xs: 4, md: 0 }}>
            <Skeleton height={250} animation="wave" variant="rectangular" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Skeleton animation="wave" height={40} width={"70%"} />

            <Skeleton animation="wave" height={40} width={"80%"} />

            <Skeleton animation="wave" height={40} width={"85%"} />

            <Skeleton animation="wave" height={70} width={"50%"} />
          </Grid>
        </Grid>
        </Paper>
      </>
    );
  } else if (data) {
    return (
     
      <Grid>
        <Grid
          item
          xs={12}
          md={12}
          direction={{ xs: "column", md: "row" }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", height: "100%" }}>
            <img
              width={300}
              height={"100%"}
              src={data.image}
              loading="lazy"
              decoding="async"
            />
          </Box>
          <Box sx={{ m: 2 }}>
            <Typography variant="h5" sx={{ mr: 1 }}>
              {data.title}
            </Typography>
            <Typography
              my={0.4}
              color={"crimson"}
              fontSize={"22px"}
              fontWeight={"700"}
              variant="h6"
            >
              ${data.price}
            </Typography>
            <Rating
              name="simple-controlled"
              value={data.rating.rate}
              size="small"
              precision={0.5}
            />
            <Typography
              variant="body1"
              sx={{ pr: 4, my: 3, fontSize: "14px", color: "text.secondary" }}
            >
              {data.description}
            </Typography>
            <Button
              onClick={() => increaseCartQuantity(gitID)}
              variant="contained"
              sx={{ textTransform: "capitalize", mb: { xs: 1, md: 0 } }}
              size="large"
            >
              <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
              Add To Cart {renderData.filter(one => one.id == data.id).map((item) => item.quantity)} 
            </Button>
        
          </Box>
        </Grid>
      </Grid>
    );
  } else {
    <Typography variant="h4">{error}</Typography>;
  }
}

export default DetailsCard;
