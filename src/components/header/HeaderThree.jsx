// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Typography, useMediaQuery } from "@mui/material";
// import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
// import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
// import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";
import Links from "./Links";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
function HeaderThree() {
  const [state, setState] = useState({ top: false });
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleArrow, setToggleArrow] = useState(true);
  const [t] = useTranslation()
  const theme = useTheme()

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggleArrow(!toggleArrow);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // pb: 1,
        // pt: 1,
        py: 1,
      }}
    >



      {useMediaQuery('(min-width:1200px)')
        && (<Stack gap={4} direction={"row"} alignItems={"center"} >
          <Typography

            sx={{
              '&:hover': {
                borderBottom: "1px solid #000",
              },
            }}>
            <Link to='/whoWeAre' color="inherit"


              title={t(`Whaao we are`)} >Who we are</Link>
          </Typography>
          <Links title={t(`Partners`)} />
          <Links title={t(`HORECA`)} />
          <Link >Retail</Link>
          <Link to='contactUs'>Contact us</Link>
        </Stack>)}

      {useMediaQuery('(max-width:1200px)')
        && (<IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>)}
      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":
            { height: "100%" }
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >

        <Box
          sx={{
            width: { xs: "350px", md: "750px" }, mx: "auto", position: "relative", mt: 6, pt: 10,
          }}>
          <IconButton
            sx={{
              position: "absolute", top: "0", right: "2%",
              ":hover": { rotate: "360deg", scale: "1.09", transition: ".3s", color: "red" }
            }}
            onClick={toggleDrawer("top", false)}>
            <Close />
          </IconButton>
          {[
            { mainLink: t`Who we are`, subLink: [t`Link`, t`Link`, t`Link`] },
            { mainLink: t`MegaMenu`, subLink: [t`Link`, t`Link`, t`Link`] },
            { mainLink: t`FullScreen`, subLink: [t`Link`, t`Link`, t`Link`] },
            { mainLink: t`pages`, subLink: [t`Link`, t`Link`, t`Link`] },
            { mainLink: t`UserAccount`, subLink: [t`Link`, t`Link`, t`Link`] },
            {
              mainLink: t`VendorAccount`, subLink: [t`Link`, t`Link`, t`Link`]

            },].map((one) => {
              return (
                <Accordion elevation={0} sx={{ bgcolor: "initial" }} key={one}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {one.mainLink}
                  </AccordionSummary>
                  <List sx={{ py: 0, px: 0 }}>
                    {one.subLink.map((Link) => {
                      return (
                        <ListItem key={Link}>
                          <ListItemButton>
                            <ListItemText primary={Link} />
                          </ListItemButton>
                        </ListItem>
                      )
                    })}
                  </List>
                </Accordion>
              )
            })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default HeaderThree;
