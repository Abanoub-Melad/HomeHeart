// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Skeleton, Typography, useMediaQuery } from "@mui/material";
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
import LinksHoreca from "./LinksHoreca";
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
      // className="headeraaaaa"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // pb: 1,
        // pt: 1,
        py: 1,
        // opacity: 0.5,
        //  backgroundColor: theme.palette.mode === "light" ? "#ccc" : "#fff" 
        // backgroundColor: #cccccc,
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
          <LinksHoreca title={t(`HORECA`)} />
          <Link to='/Retail' >Retail</Link>
          <Link to='contactUs'>Contact us</Link>
        </Stack>)}

      {useMediaQuery('(max-width:1200px)')
        && (<IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>)}
      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":
            { height: "100%" }
        }}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >

        <Box
          sx={{
            padding: "15px",
            width: { xs: "380px", md: "750px" }, mx: "auto", position: "relative", mt: 5, pt: 5,
          }}>
          <IconButton
            sx={{
              position: "absolute", left: "90", right: "6%", top: "0",
              ":hover": { rotate: "360deg", scale: "1.09", transition: ".3s", color: "red" }
            }}
            onClick={toggleDrawer("left", false)}>
            <Close />
          </IconButton>
    
          <ListItem  sx={{p: 0}} component={Link}  to="whoWeAre">
                          <ListItemButton >
                            <ListItemText primary={"Who we are"} />
                          </ListItemButton>
                        </ListItem>
                  
                <Accordion elevation={0} sx={{
                  bgcolor: "initial", 
                }} 
                >
                  {/* <Skeleton height={100} /> */}

                    
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                   Partners
                  </AccordionSummary>
                  <List sx={{ py: 0, px: 0 }}>
                        <ListItem component={Link}  to="Luigi-Bormioli">
                          <ListItemButton>
                            <ListItemText primary={"Luigi Bormioli"} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem   component={Link} to="/La-Tavola">

                          <ListItemButton>
                            <ListItemText primary={"La Tavola"} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem   component={Link} to="/Lava">

                            <ListItemButton>
                              <ListItemText primary={"LAVA"} />
                            </ListItemButton>
                          </ListItem>
                         

                
                        
                  </List>
                </Accordion>
          
                <Accordion elevation={0} 
             
                sx={{
                  bgcolor: "initial",
                  border: "none",
                  "&::before": {
                    display: "none",
                  }
                }}
                >
                  {/* <Skeleton height={100} /> */}

                    
                  <AccordionSummary
                  
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                   HORECA
                  </AccordionSummary>
                  <List sx={{ py: 0, px: 0 }}>
                        <ListItem component={Link} to="/Glassware">
                          <ListItemButton>
                            <ListItemText primary={"Glassware"} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem   component={Link}to="/Chinaware">

                          <ListItemButton>
                            <ListItemText primary={"Chinaware"} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem   component={Link} to="/CastIronOven">

                            <ListItemButton>
                              <ListItemText primary={"Cast Iron Oven"} />
                            </ListItemButton>
                          </ListItem>
                        <ListItem   component={Link} to="/Polycarbonate">

                            <ListItemButton>
                              <ListItemText primary={"Polycarbonate Melamine-ware & Acrylic Poolware"} />
                            </ListItemButton>
                          </ListItem>
                        <ListItem   component={Link} to="/Silverware">

                            <ListItemButton>
                              <ListItemText primary={"Silverware Hollowware"} />
                            </ListItemButton>
                          </ListItem>
                        <ListItem   component={Link} to="/Buffetware">

                            <ListItemButton>
                              <ListItemText primary={"Buffetware"} />
                            </ListItemButton>
                          </ListItem>
                         

                
                        
                  </List>
                </Accordion>
                {/* <List sx={{ py: 0, px: 0, }}> */}
                        <ListItem  sx={{p: 0}} component={Link}  to="contactUs">
                          <ListItemButton >
                            <ListItemText primary={"Contact us"} />
                          </ListItemButton>
                        </ListItem>
                        {/* </List> */}
        </Box>
      </Drawer>
    </Container>
  );
}

export default HeaderThree;

{/* <Accordion elevation={0} sx={{ bgcolor: "initial" }} key={one}>
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
</Accordion> */}