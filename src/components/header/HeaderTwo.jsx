import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import { Close, ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useGetProductByNameQuery } from "../../Rudex/Product";
import { useMyStore } from "../context/CartShopping";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "270px",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "140px",
    margin: 'auto',
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function HeaderTwo() {
  const [scrolling, setScrolling] = useState(false);
  const [state, setState] = useState({ right: false });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [t, i18n] = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const options = [t(`Categories`), t(`CAR`), t(`cloths`), t(`Electronics`)];
  const { gitID, renderData, removeFromCart,
    valueSearch, searchProduct,
    increaseCartQuantity, decreaseCartQuantity, } = useMyStore();

  const { data } = useGetProductByNameQuery(`products`);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      elevation={scrolling ? 2 : 0}
      position="sticky"
      color={`${theme.palette.mode === "dark" ? "inherit" : "inherit"}`}
    >
      <Container
        sx={{ display: "flex", justifyContent: "space-between", py: 2 }}
      >
        <Stack alignItems="center">
          <svg
            className={` logoHeader ${theme.palette.mode === "light" ? "logoHeaderDark" : ""
              }`}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 159.000000 76.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M265 695 c-194 -103 -215 -134 -215 -312 0 -158 21 -194 161 -274
                        105 -60 143 -71 201 -58 53 12 223 112 244 144 15 22 17 23 49 9 27 -11 101
                        -14 362 -14 195 0 343 4 365 10 49 14 94 53 119 103 17 32 20 54 17 102 -4 72
                        -30 117 -86 156 l-36 24 -360 3 c-259 2 -368 -1 -389 -9 -25 -11 -31 -9 -55
                        14 -33 31 -164 109 -211 125 -56 20 -96 14 -166 -23z m241 -46 c51 -28 103
                        -62 115 -75 l22 -23 -26 -31 c-28 -33 -47 -87 -47 -135 0 -36 31 -106 58 -133
                        18 -18 19 -22 6 -41 -15 -21 -154 -107 -212 -130 -47 -19 -92 -8 -185 45 -148
                        84 -157 99 -157 259 0 170 11 186 194 284 85 45 119 42 232 -20z m424 -229
                        c15 -15 20 -33 20 -69 l0 -48 -47 -1 c-81 -2 -121 62 -71 115 27 29 71 30 98
                        3z m160 7 c0 -7 -16 -29 -36 -48 l-35 -34 38 -5 c25 -3 38 -10 38 -20 0 -11
                        -15 -16 -59 -18 -80 -4 -89 8 -43 56 20 21 37 41 37 45 0 4 -16 7 -35 7 -24 0
                        -35 5 -35 15 0 12 14 15 65 15 47 0 65 -4 65 -13z m138 -7 c17 -16 22 -32 22
                        -69 l0 -48 -47 -1 c-81 -2 -121 62 -71 115 27 28 67 30 96 3z m150 0 c17 -16
                        22 -32 22 -69 l0 -48 -47 -1 c-81 -2 -121 62 -71 115 27 28 67 30 96 3z m122
                        5 c0 -8 -5 -15 -12 -15 -26 0 -48 -34 -48 -72 0 -55 -24 -45 -28 11 -3 34 2
                        49 19 67 25 27 69 33 69 9z"
              />
              <path
                d="M256 494 c-10 -14 -16 -37 -14 -52 l3 -27 105 -1 c58 -1 110 -3 115
                        -4 19 -6 45 12 45 32 0 11 -8 33 -17 49 -17 29 -17 29 -119 29 -98 0 -102 -1
                        -118 -26z"
              />
              <path
                d="M260 330 c0 -74 9 -80 119 -80 99 0 111 9 111 86 0 41 -4 54 -15 54
                        -10 0 -15 -11 -15 -35 l0 -35 -85 0 -85 0 0 35 c0 24 -5 35 -15 35 -12 0 -15
                        -13 -15 -60z"
              />
              <path
                d="M856 394 c-9 -8 -16 -19 -16 -24 0 -11 29 -40 40 -40 11 0 40 29 40
                        40 0 11 -29 40 -40 40 -5 0 -16 -7 -24 -16z"
              />
              <path
                d="M1156 394 c-9 -8 -16 -19 -16 -24 0 -11 29 -40 40 -40 11 0 40 29 40
                        40 0 11 -29 40 -40 40 -5 0 -16 -7 -24 -16z"
              />
              <path
                d="M1306 394 c-9 -8 -16 -19 -16 -24 0 -11 29 -40 40 -40 11 0 40 29 40
                        40 0 11 -29 40 -40 40 -5 0 -16 -7 -24 -16z"
              />
            </g>
          </svg>
        </Stack>
        <Search
          Search
          sx={{
            display: "flex",
            borderRadius: 22,
            justifyContent: "space-between",
            "&:focus": {
              border: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRadius: 22,
              justifyContent: "space-between",
              borderColor: "red",
            }}
          >
            {(i18n.language === 'en') &&

              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            }

            <StyledInputBase
              sx={{ px: 1 }}
              value={valueSearch}
              onChange={(e) => searchProduct(e)}
              placeholder={t(`searchInput`)}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}    >

            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.myColor.main,
                borderRadius: 22,
                p: "0px",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{ width: 90, textAlign: "center", cursor: "pointer" }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Search>

        <Stack direction={"row"} alignItems={"center"}>
          <IconButton

            // onClick={() => handleClickOpen()}
            onClick={() => navigate('/Register')}
            sx={{ display: "flex", flex: 1 }}
          >
            <PersonIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton onClick={toggleDrawer("right", true)} aria-label="cart">

            <StyledBadge
              badgeContent={renderData.length}
              color="primary"
              sx={{ '.MuiBadge-badge': { background: '#D23F57' } }}
            >
              <ShoppingCartIcon

              />
            </StyledBadge>
          </IconButton>

          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <Box sx={{ width: { xs: "370px", md: "400px" } }}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box display={"flex"}>
                  <LocalMallIcon />
                  <Typography variant="body1" size="small" mx={1}>
                    items  <Typography variant="span" size="small" mx={1} color="error">

                      {renderData.length}
                    </Typography>
                  </Typography>
                </Box>
                <IconButton onClick={toggleDrawer("right", false)}>
                  <Close />
                </IconButton>
              </Box>
              <Divider />
              {/* start Your shopping bag is empty. */}
              <Box>
                {!data ? (
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        m: "auto",
                        textAlign: "center",
                        transform: "translateY(200px)",
                      }}
                    >
                      <svg
                        width="93"
                        height="109"
                        viewBox="0 0 93 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M80.3123 106.122H13.7663C8.78247 106.122 4.74243 102.075 4.74243 97.0816V6.50505C4.74243 5.0506 5.91927 3.87134 7.37129 3.87134H86.7078C88.1596 3.87134 89.3367 5.05034 89.3367 6.50505V97.0816C89.3364 102.075 85.2961 106.122 80.3123 106.122Z"
                          fill="#EC6178"
                        />
                        <path
                          d="M89.3355 6.50578V97.0811C89.3355 102.074 85.2952 106.122 80.3108 106.122H71.1443C76.1258 106.122 80.1661 102.075 80.1661 97.0811V6.50578C80.1661 5.04929 78.991 3.87207 77.5372 3.87207H86.7063C88.1576 3.87207 89.3355 5.04929 89.3355 6.50578Z"
                          fill="#D23F57"
                        />
                        <path
                          d="M89.3352 6.5057V21.129H4.74243V6.5057C4.74243 5.04972 5.91875 3.87378 7.37206 3.87378H86.7055C88.1588 3.87378 89.3352 5.04946 89.3352 6.5057Z"
                          fill="#4B566B"
                        />
                        <path
                          d="M15.8017 12.4993V21.1272H4.74146L15.8017 12.4993Z"
                          fill="#4B566B"
                        />
                        <path
                          d="M78.2755 12.4993V21.1272H89.3357L78.2755 12.4993Z"
                          fill="#4B566B"
                        />
                        <path
                          d="M86.7068 3.87158L78.2755 12.4996L89.3357 21.1275V6.50504C89.3357 5.05059 88.1586 3.87158 86.7068 3.87158Z"
                          fill="#879AB0"
                        />
                        <path
                          d="M7.37032 3.87231L15.8017 12.5003L4.74146 21.128V6.50577C4.74146 5.05132 5.91855 3.87231 7.37032 3.87231Z"
                          fill="#879AB0"
                        />
                        <path
                          d="M47.0386 82.9143C35.3509 82.9143 25.8423 73.3881 25.8423 61.6788V46.0203C25.8423 44.9295 26.725 44.0452 27.8138 44.0452C28.9026 44.0452 29.7853 44.9295 29.7853 46.0203V61.6788C29.7853 71.2099 37.5251 78.964 47.0386 78.964C56.552 78.964 64.2918 71.2099 64.2918 61.6788V45.9236C64.2918 44.8329 65.1746 43.9485 66.2634 43.9485C67.3521 43.9485 68.2349 44.8329 68.2349 45.9236V61.6788C68.2349 73.3881 58.7263 82.9143 47.0386 82.9143Z"
                          fill="#E3364E"
                        />
                        <path
                          d="M47.0386 76.3016C35.3667 76.3016 25.8708 66.7882 25.8708 55.0948V39.4363C25.8708 38.3611 26.7408 37.4898 27.8138 37.4898C28.887 37.4898 29.7567 38.3613 29.7567 39.4363V55.0948C29.7567 64.6417 37.5093 72.4083 47.0383 72.4083C56.5673 72.4083 64.3199 64.6414 64.3199 55.0948V39.3393C64.3199 38.2642 65.1899 37.3928 66.2628 37.3928C67.336 37.3928 68.206 38.2644 68.206 39.3393V55.0948C68.2063 66.7885 58.7104 76.3016 47.0386 76.3016Z"
                          fill="#F6F9FC"
                        />
                        <path
                          d="M66.2634 39.4367C68.6869 39.4367 70.6516 37.4684 70.6516 35.0404C70.6516 32.6124 68.6869 30.644 66.2634 30.644C63.8398 30.644 61.8751 32.6124 61.8751 35.0404C61.8751 37.4684 63.8398 39.4367 66.2634 39.4367Z"
                          fill="#AEB4BE"
                        />
                        <path
                          d="M27.8138 39.4367C30.2373 39.4367 32.202 37.4684 32.202 35.0404C32.202 32.6124 30.2373 30.644 27.8138 30.644C25.3902 30.644 23.4255 32.6124 23.4255 35.0404C23.4255 37.4684 25.3902 39.4367 27.8138 39.4367Z"
                          fill="#AEB4BE"
                        />
                      </svg>
                      <Typography variant="body1">
                        Your shopping bag is empty. {gitID}
                        <br />
                        Start shopping
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Stack
                    direction={"column"}
                    spacing={1.8}
                    sx={{ p: 2, alignItems: "center" }}
                  >
                    {renderData.map((one) => (
                      <>
                        <Stack
                          direction={"row"}
                          spacing={2}
                          sx={{ alignItems: "center" }}
                          key={one.id}
                        >
                          <Box>
                            <Box className="divButton">
                              <IconButton
                                onClick={() => increaseCartQuantity(one.id)}
                                size="small" className="divButton">
                                <AddIcon className="styleButton" />
                              </IconButton>
                            </Box>
                            <Typography
                              className="lineClamp"
                              variant="span"
                              gutterBottom
                              color="text.primary"
                              sx={{ fontSize: "17px", py: .5, mx: 1, mb: 0 }}
                            >
                              {one.quantity}
                            </Typography>
                            <Box className="divButton">
                              <IconButton
                                onClick={() => decreaseCartQuantity(one.id)}

                                size="small" className="divButton">
                                <RemoveIcon className="styleButton" />
                              </IconButton>
                            </Box>
                          </Box>
                          <img
                            className="imgCardShopping"
                            src={one.image}
                            size=""
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <Box sx={{ p: 1 }}>
                            <Typography
                              className="lineClamp"
                              variant="p"
                              fontSize={"17px"}
                              gutterBottom
                              color="text.primary"
                            >
                              {one.title}
                            </Typography>
                            <Typography
                              className="lineClamp"
                              variant="span"
                              fontSize={"12px"}
                              gutterBottom
                              color="text.secondary"
                            >
                              $ {one.price} * {one.quantity}
                            </Typography>
                            <Typography
                              className="lineClamp"
                              fontSize={"19px"}
                              variant="span"
                              gutterBottom
                              color="#D23F57"
                            >
                              $ {one.price * one.quantity}
                            </Typography>
                          </Box>
                          <Box>
                            <IconButton
                              onClick={() => console.log(removeFromCart(one.id))}
                              size="small"
                            >
                              <Close size="small" />
                            </IconButton>
                          </Box>
                        </Stack>
                        <Divider sx={{ width: "100%", height: "100%" }} />
                      </>
                    ))}
                  </Stack>
                )}
              </Box>
            </Box>
            {/* end Your shopping bag is empty. */}
          </Drawer>
        </Stack>
      </Container>
    </AppBar>
  );
}

export default HeaderTwo;
