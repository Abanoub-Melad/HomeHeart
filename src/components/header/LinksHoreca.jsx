import { Box } from "@mui/system"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material"
import { Paper, Typography } from "@mui/material"

function LinksHoreca({ title }) {
    return (
        <Box sx={{
            zIndex: 20,
            display: "flex", alignItems: "center",
            position: "relative",
            cursor: "pointer",
            ":hover .showPaperHover": { display: "block", cursor: "pointer" }
        }}>
            <Typography>
                {title}
            </Typography>
            <ExpandMore />
            <Box className="showPaperHover"
                sx={{
                    position: "absolute", left: "50%", transform: "translateX(-50%)", top: "100%", minWidth: "170px", display: "none",
                }}>
                <Paper
                    sx={{ mt: 2 }}
                >
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding
                                component={Link} to="/glassware" >

                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                        primary="Glassware" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{
                                position: "relative",
                                ":hover .sub-link": { display: "block" },
                            }}>


                                {/* <Box
                                    className="sub-link "
                                    sx={{
                                        display: "none",
                                        position: "absolute", top: "-9%", left: "100%"

                                    }}
                                >
                                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                                        <ListItemText
                                                            sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}

                                                            primary="Chinaware" />
                                                    </ListItemButton>
                                                </ListItem>

                                            </List>
                                        </nav>
                                    </Paper>
                                </Box> */}
                            </ListItem>
                            {/* <Paper sx={{ ml: 0, minWidth: 150 }}> */}


                            <ListItem disablePadding
                                component={Link} to="/Chinaware" >


                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText
 sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                        primary="Chinaware" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding
                                component={Link} to="/CastIronOven" >


                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }}
                                        primary="Cast Iron 
" />
                                </ListItemButton>
                            </ListItem>
                            {/* </Paper> */}

                            <ListItem disablePadding component={Link} to="/Polycarbonate">
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }
                                        }
                                        primary="Polycarbonate & Melamine 
" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding component={Link} to="/Silverware">
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{ ".MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }
                                        }
                                        primary="Silverware & Buffet Station" />
                                </ListItemButton>
                            </ListItem>
                        
                        </List>
                    </nav>
                </Paper>
            </Box>


        </Box>
    )
}

export default LinksHoreca
