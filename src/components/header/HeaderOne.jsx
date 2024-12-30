// import { useContext, useState } from "react";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
// import { ColorModeContext } from "../../Themes/Themes";
// import { Stack } from "@mui/material";
// // Icon
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// // translate
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { Container } from "@mui/material";

// import { useTranslation } from "react-i18next";
// const options = [
//   'ar',
//   'en',
// ];
// function HeaderOne() {
//   const [t , i18n] = useTranslation()
//   const colorMode = useContext(ColorModeContext);
//   const theme = useTheme();
//   // translate
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(1);
//   const open = Boolean(anchorEl);
//   const handleClickListItem = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index, option) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//     handleChangeLanguage(option)
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  
//     function handleChangeLanguage(lung){
//           i18n.changeLanguage(lung)
//           localStorage.setItem("lng", lung )

//           if(i18n.language === 'ar'){
//             theme.direction = 'rtl'
            
//             document.body.dir = i18n.dir()
//           }else{
//             theme.direction = 'ltr'

//             document.body.dir = i18n.dir()
//           }
//       }
    

//   return (
//     <Box
//       sx={{
//         bgcolor: "#2B3445",
//         py: "4px",
       
//       }}
//     >
//       <Container>

//         <Stack spacing={{xs:1.5 ,  md: 2}} direction={"row"}
//           alignItems={"center"}>

//           <Typography
//             sx={{
//               bgcolor: "#D23F57",
//               borderRadius: "12px",
//               fontWeight: "bold",
//               color: "#fff",
//               fontSize: "12px",
//               p: "3px 10px",
//               mr: 2
//             }}
//             variant="body2"
//           >
//             {t(`titleHOT`)}
//           </Typography>

//           <Typography
//             sx={{
//               color: "#fff",
//               px : '6px',
//               fontWeight: "300",
//               fontSize:{xs: '9px',  md:  "12px"}
//               }}
//             variant="body2"
//           >

//         {t(`titleFree`)}
//           </Typography>
//           <Box
//             flexGrow={1}
//           />
//           <div>
//             {theme.palette.mode === "light" ? (
//               <IconButton
//                 onClick={() => {
//                   localStorage.setItem(
//                     "mode",
//                     theme.palette.mode === "dark" ? "light" : "dark"
//                   );
//                   colorMode.toggleColorMode();
//                 }}
//                 color="#fff"
//               >
//                 <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
//               </IconButton>
//             ) : (
//               <IconButton
//                 onClick={() => {
//                   localStorage.setItem(
//                     "mode",
//                     theme.palette.mode === "dark" ? "light" : "dark"
//                   );
//                   colorMode.toggleColorMode();
//                 }}
//                 // color="inherit"
//                 color="#fff"

//               >
//                 <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
//               </IconButton>
//             )}
//           </div>
//           <div>
//             <List
//               component="nav"
//               aria-label="Device settings"
//               // sx={{ bgcolor: 'background.paper' }}
//               sx={{ p: 0, m: 0 }}
//             >
//               <ListItemButton
//                 id="lock-button"
//                 aria-haspopup="listbox"
//                 aria-controls="lock-menu"
//                 aria-label="when device is locked"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClickListItem}
//                 sx={{

//                   "&:hover": { cursor: 'pointer', bgcolor: "none" }, px: 0
//                 }}
//               >
//                 <ListItemText

//                   // Customization 
//                   sx={{ ".MuiTypography-root": { fontSize: '11px', color: "#fff" } }}
//                   secondary={options[selectedIndex]}
//                 />
//                 <ExpandMore sx={{ fontSize: "18px", color: "#fff" }} />

//               </ListItemButton>
//             </List>


//             <Menu

//               id="lock-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 'aria-labelledby': 'lock-button',
//                 role: 'listbox',
//               }}
//             >
//               {options.map((option, index) => (
//                 <MenuItem
//                   sx={{
//                     fontSize: '13px',
//                     p: "3px  10px",
//                   }}
//                   key={option}
//                   selected={index === selectedIndex}
//                   onClick={(event) => handleMenuItemClick(event, index, option)}
//                 >
//                   {option}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </div>




//           <TwitterIcon
//             sx={{
//               fontSize: "16px",
//               color: "#fff",
//               cursor: "pointer"
//             }} />
//           <FacebookIcon

//             sx={{
//               fontSize: "16px",
//               color: "#fff",
//               mx: 1,
//               cursor: "pointer"

//             }}
//           />
//           <InstagramIcon
//             sx={{
//               fontSize: "16px",
//               color: "#fff",
//               cursor: "pointer"

//             }}
//           />




//         </Stack>
//       </Container>


//     </Box >
//   );
// }

// export default HeaderOne

// {/* <Box
// sx={{
//   bgcolor: "#2B3445"
// }}
// >
// <Stack spacing={2} direction="row"    justifyContent="flex-end"
//     alignItems="flex-start">

//   <Typography
//     sx={{
//       bgcolor: "#D23F57",
//       borderRadius: "5px",
//       fontWeight: "bold",
//       color: "#fff",
//       fontSize: "12px",

//     }}
//     variant="body2"
//   >
//     HOT
//   </Typography>

//   <Typography
//     sx={{
//       bgcolor: "#000000",
//       color: "#fff",
//       fontSize: "12px",
//     }}
//     variant="body2"
//   >

//     Free Express Shipping
//   </Typography>

//   <div>
//     {theme.palette.mode === "light" ? (
//       <IconButton
//         onClick={() => {
//           localStorage.setItem(
//             "mode",
//             theme.palette.mode === "dark" ? "light" : "dark"
//           );
//           colorMode.toggleColorMode();
//         }}
//         color="inherit"
//       >
//         <LightModeOutlined />
//       </IconButton>
//     ) : (
//       <IconButton
//         onClick={() => {
//           localStorage.setItem(
//             "mode",
//             theme.palette.mode === "dark" ? "light" : "dark"
//           );
//           colorMode.toggleColorMode();
//         }}
//         color="inherit"
//       >
//         <DarkModeOutlined />
//       </IconButton>
//     )}
//   </div>


// </Stack>
// </Box> */}



// // {theme.palette.mode === "light" ? (
// //   <IconButton
// //     onClick={() => {
// //       localStorage.setItem(
// //         "mode",
// //         theme.palette.mode === "dark" ? "light" : "dark"
// //       );
// //       colorMode.toggleColorMode();
// //     }}
// //     color="#fff"
// //   >
// //     <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
// //   </IconButton>
// // ) : (
// //   <IconButton
// //     onClick={() => {
// //       localStorage.setItem(
// //         "mode",
// //         theme.palette.mode === "dark" ? "light" : "dark"
// //       );
// //       colorMode.toggleColorMode();
// //     }}
// //     // color="inherit"
// //     color="#fff"

// //   >
// //     <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
// //   </IconButton>
// // )}
import { alpha, styled } from '@mui/material/styles';

import { useContext, useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../Themes/Themes";
import { Stack } from "@mui/material";
// Icon
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// translate
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Container } from "@mui/material";

import { useTranslation } from "react-i18next";
const options = [
  'ar',
  'en',
];
function HeaderOne() {
  const [t , i18n] = useTranslation()
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  // translate
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    handleChangeLanguage(option)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
    function handleChangeLanguage(lung){
          i18n.changeLanguage(lung)
          localStorage.setItem("lng", lung )

          if(i18n.language === 'ar'){
            theme.direction = 'rtl'
            
            document.body.dir = i18n.dir()
          }else{
            theme.direction = 'ltr'

            document.body.dir = i18n.dir()
          }
      }
    

  return (
    // <Box
    //   sx={{
    //     bgcolor: "#",
    //     py: "4px",
       
    //   }}
    // >
      // {/* <Container> */}  

        <Stack 
        spacing={{xs:1.5 ,  md: 2}} 
        direction={"row"}
        gap={1}
          alignItems={"center"}>

          {/* <Typography
            sx={{
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "12px",
              p: "3px 10px",
              mr: 2
            }}
            variant="body2"
          >
            {t(`titleHOT`)}
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              px : '6px',
              fontWeight: "300",
              fontSize:{xs: '9px',  md:  "12px"}
              }}
            variant="body2"
          >

        {t(`titleFree`)}
          </Typography> */}
          <Box
            flexGrow={1}
          />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                    // theme.palette.mode === "dark" ? "headeraaaaa" : "headeraaaaa"
                    // backgroundColor: alpha(theme.palette.common.white, 0.15)

                  );
                  colorMode.toggleColorMode();
                }}
                // color="#fff"
              >
                <LightModeOutlined sx={{ fontSize: "16px",  }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                
                // color="inherit"
                // color="#fff"

              >
                <DarkModeOutlined sx={{ fontSize: "16px", }} />
              </IconButton>
            )}
          </div>
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              // sx={{ bgcolor: 'background.paper' }}
              sx={{ p: 0, m: 0 }}
            >
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickListItem}
                sx={{

                  "&:hover": { cursor: 'pointer', bgcolor: "none" }, px: 0
                }}
              >
                <ListItemText

                  // Customization 
                  sx={{ ".MuiTypography-root": { fontSize: '11px',} }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "18px",
                    }} />

              </ListItemButton>
            </List>


            <Menu

              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'lock-button',
                role: 'listbox',
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{
                    fontSize: '13px',
                    p: "3px  10px",
                  }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index, option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>




          <TwitterIcon
            sx={{
              fontSize: "16px",
              // color: "#fff",
              cursor: "pointer"
            }} />
          <FacebookIcon

            sx={{
              fontSize: "16px",
              // color: "#fff",
              mx: 1,
              cursor: "pointer"

            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              // color: "#fff",
              cursor: "pointer"

            }}
          />




      </Stack>
      // {/* </Container> */}
      // </Box >


  );
}

export default HeaderOne

{/* <Box
sx={{
  bgcolor: "#2B3445"
}}
>
<Stack spacing={2} direction="row"    justifyContent="flex-end"
    alignItems="flex-start">

  <Typography
    sx={{
      bgcolor: "#D23F57",
      borderRadius: "5px",
      fontWeight: "bold",
      color: "#fff",
      fontSize: "12px",

    }}
    variant="body2"
  >
    HOT
  </Typography>

  <Typography
    sx={{
      bgcolor: "#000000",
      color: "#fff",
      fontSize: "12px",
    }}
    variant="body2"
  >

    Free Express Shipping
  </Typography>

  <div>
    {theme.palette.mode === "light" ? (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <LightModeOutlined />
      </IconButton>
    ) : (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <DarkModeOutlined />
      </IconButton>
    )}
  </div>


</Stack>
</Box> */}



// {theme.palette.mode === "light" ? (
//   <IconButton
//     onClick={() => {
//       localStorage.setItem(
//         "mode",
//         theme.palette.mode === "dark" ? "light" : "dark"
//       );
//       colorMode.toggleColorMode();
//     }}
//     color="#fff"
//   >
//     <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
//   </IconButton>
// ) : (
//   <IconButton
//     onClick={() => {
//       localStorage.setItem(
//         "mode",
//         theme.palette.mode === "dark" ? "light" : "dark"
//       );
//       colorMode.toggleColorMode();
//     }}
//     // color="inherit"
//     color="#fff"

//   >
//     <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
//   </IconButton>
// )}