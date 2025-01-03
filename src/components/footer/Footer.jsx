import { useTheme } from "@emotion/react";
import { Box, Grid, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
function Footer() {
    const theme = useTheme()
    return (
        <>
            <Box
                sx={{
                    // ".css-196h37h": { bgColor: "#283445" },
                        background: '#283445',
                    background: ' rgba(40, 52, 69)'  ,
                }}
            >
                {/* <Box
                sx={{
                    ".css-196h37h": { bgColor: "#283445" },
                    background: "#283445",
                }}
            > */}
                <Grid container
                    sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}

               
                   >
                    <Grid item xs={12} sm={6} lg={3}
                    
                        sx={{ display: 'flex',  flexDirection: 'column', gap: 2, p: 1 }}
                    >
                        {/* <Box  >
                            <svg
                                className="logo"
                                version="1.0" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 159.000000 76.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M265 695 c-194 -103 -215 -134 -215 -312 0 -158 21 -194 161 -274
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
                        49 19 67 25 27 69 33 69 9z"/>
                                    <path d="M256 494 c-10 -14 -16 -37 -14 -52 l3 -27 105 -1 c58 -1 110 -3 115
                        -4 19 -6 45 12 45 32 0 11 -8 33 -17 49 -17 29 -17 29 -119 29 -98 0 -102 -1
                        -118 -26z"/>
                                    <path d="M260 330 c0 -74 9 -80 119 -80 99 0 111 9 111 86 0 41 -4 54 -15 54
                        -10 0 -15 -11 -15 -35 l0 -35 -85 0 -85 0 0 35 c0 24 -5 35 -15 35 -12 0 -15
                        -13 -15 -60z"/>
                                    <path d="M856 394 c-9 -8 -16 -19 -16 -24 0 -11 29 -40 40 -40 11 0 40 29 40
                        40 0 11 -29 40 -40 40 -5 0 -16 -7 -24 -16z"/>
                                    <path d="M1156 394 c-9 -8 -16 -19 -16 -24 0 -11 29 -40 40 -40 11 0 40 29 40
                        40 0 11 -29 40 -40 40 -5 0 -16 -7 -24 -16z"/>
                                    <path d="M1306 394 c-9 -8 -16 -19 -16 -24 0 -11 29 -40 40 -40 11 0 40 29 40
                        40 0 11 -29 40 -40 40 -5 0 -16 -7 -24 -16z"/>

                                </g>
                            </svg>
                        </Box> */}
                        {/* <Box > */}

                        <Typography 
                        color="text.primary" fontSize={'14px'} sx={{ 
                            
                            color: "#ccc" }} >
                            Copyright © 2022 Home & Heart.
                            All rights reserved.
                            Customer First, Service Foremost
                        </Typography>
                        {/* </Box> */}
                        {/* <Box sx={{
                            display: 'flex', alignItems: 'center',
                            gap: 2,
                        }}>

                            <Box sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',

                                px: 2, py: .5,
                                bgcolor: '#161d2b', width: '150px', borderRadius: '5px'
                            }}>

                                <svg
                                    className="iconFooter"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlayStoreIcon" fill="currentColor"><g><path d="M17.9236 8.23227C15.1356 6.67287 10.6607 4.16885 3.71978 0.282486C3.25183 -0.0265614 2.71342 -0.0670615 2.24823 0.090392L14.1569 11.999L17.9236 8.23227Z" fill="#32BBFF"></path><path d="M2.24824 0.090332C2.16105 0.119863 2.07621 0.155488 1.99507 0.19852C1.48137 0.476395 1.10388 1.0111 1.10388 1.68737V22.3105C1.10388 22.9868 1.48132 23.5215 1.99507 23.7993C2.07607 23.8423 2.16087 23.8781 2.24796 23.9078L14.1568 11.999L2.24824 0.090332Z" fill="#32BBFF"></path><path d="M14.1569 11.999L2.24799 23.9079C2.71331 24.0665 3.25172 24.0291 3.71982 23.7155C10.451 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8512 15.8121 17.9272 15.7694L14.1569 11.999Z" fill="#32BBFF"></path><path d="M1.10388 11.999V22.3106C1.10388 22.9869 1.48132 23.5216 1.99507 23.7994C2.07607 23.8424 2.16087 23.8782 2.24796 23.9079L14.1568 11.999H1.10388Z" fill="#2C9FD9"></path><path d="M3.71978 0.282559C3.16407 -0.0843794 2.50876 -0.0739263 1.99506 0.198699L13.9761 12.1798L17.9235 8.23234C15.1356 6.67295 10.6607 4.16893 3.71978 0.282559Z" fill="#29CC5E"></path><path d="M13.9762 11.8184L1.99506 23.7994C2.50881 24.072 3.16407 24.0877 3.71978 23.7155C10.4509 19.9463 14.8754 17.472 17.6957 15.8993C17.7742 15.8552 17.8511 15.8121 17.9271 15.7694L13.9762 11.8184Z" fill="#D93F21"></path><path d="M22.8961 11.9989C22.8961 11.4275 22.6078 10.8509 22.0363 10.5311C22.0363 10.5311 20.9676 9.93479 17.6919 8.10254L13.7955 11.9989L17.6957 15.8992C20.9355 14.0801 22.0363 13.4667 22.0363 13.4667C22.6078 13.147 22.8961 12.5703 22.8961 11.9989Z" fill="#FFD500"></path><path d="M22.0363 13.4669C22.6078 13.1471 22.8961 12.5704 22.8961 11.999H13.7955L17.6957 15.8993C20.9355 14.0802 22.0363 13.4669 22.0363 13.4669Z" fill="#FFAA00"></path></g>
                                </svg>
                                <Box    >
                                    <Typography variant="span" fontSize={'10px'} sx={{ color: theme.palette.mode === "light" ? "#ccc" : "#fff" }}  >
                                        Get it on
                                    </Typography>
                                    <Typography variant="h6" fontSize={'15px'} fontWeight={700} sx={{ color: theme.palette.mode === "light" ? "#ccc" : "#fff" }}>

                                        Google Play
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',

                                px: 2, py: .5,
                                bgcolor: '#161d2b', width: '150px', borderRadius: '5px'
                            }}>

                                <svg
                                    className="iconFooter"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AppleStoreIcon" fill="currentColor"><g><path d="M19.0781 24H4.92188C2.20795 24 0 21.792 0 19.0781V4.92188C0 2.20795 2.20795 0 4.92188 0H19.0781C21.792 0 24 2.20795 24 4.92188V19.0781C24 21.792 21.792 24 19.0781 24Z" fill="#00C3FF"></path><path d="M19.0781 0H12V24H19.0781C21.792 24 24 21.792 24 19.0781V4.92188C24 2.20795 21.792 0 19.0781 0Z" fill="#00AAF0"></path><path d="M7.38978 18.4929C7.17299 18.8684 6.77825 19.0785 6.37292 19.0786C6.17422 19.0786 5.97303 19.0281 5.78895 18.9218C5.22936 18.5988 5.03694 17.8807 5.36 17.3211L5.59049 16.9219H8.29681L7.38978 18.4929Z" ></path><path d="M5.17969 15.984C4.53352 15.984 4.00781 15.4583 4.00781 14.8122C4.00781 14.166 4.53352 13.6403 5.17969 13.6403H7.48491L10.6468 8.1637L9.78989 6.67945C9.46683 6.11985 9.6592 5.40173 10.2188 5.07862H10.2188C10.7784 4.75556 11.4966 4.94803 11.8196 5.50757L12 5.81999L12.1804 5.50762C12.5036 4.94798 13.2217 4.7556 13.7812 5.07867C14.0522 5.23518 14.2462 5.48788 14.3272 5.79023C14.4082 6.09257 14.3666 6.40842 14.2101 6.67949L10.1912 13.6403H12.7262L14.0794 15.984H5.17969Z" ></path><path d="M18.8203 15.9844H17.8682L18.6399 17.3211C18.963 17.8806 18.7706 18.5988 18.2111 18.9219C18.0304 19.0261 17.83 19.0794 17.6269 19.0794C17.5251 19.0794 17.4228 19.066 17.3217 19.039C17.0194 18.9579 16.7667 18.764 16.6101 18.4929L12.5412 11.4453L13.8943 9.10156L16.5151 13.6407H18.8203C19.4665 13.6407 19.9922 14.1664 19.9922 14.8126C19.9922 15.4587 19.4665 15.9844 18.8203 15.9844Z" ></path><path d="M12 13.6406V15.9844H14.0794L12.7262 13.6406H12Z" ></path><path d="M14.3272 5.7907C14.2461 5.48836 14.0522 5.23561 13.7812 5.07914C13.2217 4.75608 12.5035 4.9484 12.1804 5.50809L12 5.82047V10.508L14.2101 6.67996C14.3666 6.40889 14.4082 6.09309 14.3272 5.7907Z" ></path></g></svg>
                                <Box>
                                    <Typography variant="span" fontSize={'10px'} color="text.primary" sx={{ color: theme.palette.mode === "light" ? "#ccc" : "#fff" }} >
                                        Download on the
                                    </Typography>
                                    <Typography variant="h6" fontSize={'15px'} fontWeight={700} sx={{ color: theme.palette.mode === "light" ? "#ccc" : "#fff" }}>
                                        App Store
                                    </Typography>
                                </Box>
                            </Box>
                        </Box> */}


                    </Grid>

                    <Grid item xs={12} sm={6} lg={2}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}
                    >
                        <Box     >
                            <nav aria-label="main mailbox folders">
                                <ListItem disablePadding    >
                                    <Link href='#' underline="hover">
                                        <ListItemText primary="HORECA" component={'h1'}
                                            sx={{ color: theme.palette.mode === "light" ? "#fff" : "#fff" }}
                                            fontSize={'8px'} />
                                    </Link>
                                </ListItem>
                                <List sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>

                                    <ListItem disablePadding>
                                        <ListItemText primary="Glassware" fontSize={'14px'} sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Chinaware" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Cast Iron Oven" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Polycarbonate Melamine-ware & Acrylic Poolware" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Silverware Hollowware Buffetware" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}
                        sx={{ display: 'flex',  flexDirection: 'column', gap: 2, p: 2 }}
                    >
                        <Box    >
                            <nav aria-label="main mailbox folders">

                                <ListItem disablePadding>
                                    <Link href='#' underline="hover">
                                        <ListItemText component='p'
                                            // color="text.primary" 
                                            // sx={{color: theme.palette.text.primary}}
                                            sx={{ color: theme.palette.mode === "light" ? "#fff" : "#fff" }}
                                            primary="Recent Posts" />
                                    </Link>
                                </ListItem>
                                <List sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>

                                    <ListItem disablePadding>
                                        <ListItemText primary="Riedel
" fontSize='small'
                                            sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Riedel
" fontSize='small'
                                            sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Riedel
" fontSize='small'
                                            sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="3D Glassware
" fontSize='small'
                                            sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Lava
" fontSize='small'
                                            sx={{ color: "#ccc" }} />
                                    </ListItem>

                                    <ListItem disablePadding fontSize='small'>
                                        <ListItemText primary="Minhlong"
                                            sx={{ color: "#ccc" }} />
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 1 }}
                    >
                        <Box>
                            <nav aria-label="main mailbox folders">
                                <ListItem disablePadding>
                                    <Link href='#' underline="hover">
                                        <ListItemText primary="Contact Us"
                                            sx={{ color: theme.palette.mode === "light" ? "#fff" : "#fff" }}

                                        />
                                    </Link>
                                </ListItem>
                                <List sx={{ display: 'flex', flexDirection: 'column', gap: .5 }}>
                                    <ListItem disablePadding>
                                        <ListItemText primary="14 El Zohour St., Hedico Bldgs, Off Salah Salem st.
" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Heliopolis, Cairo, Egypt.

" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Email: info@homeandheart.com.eg
" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Phone: +202-22684192/4" sx={{ color: "#ccc" }} />
                                    </ListItem>

                                    <ListItem disablePadding>
                                        <ListItemText primary="Mobil +20129200909/ +201282333880" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Fax: +202-22684196
" sx={{ color: "#ccc" }} />
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                        {/* <Box>
                            <Box >
                                <Link href="#">
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <svg
                                            className="iconFooter"
                                            focusable="false" aria-hidden="true" viewBox="0 0 8 14" data-testid="FacebookIcon" fill="currentColor"><path d="M1.72081 14H4.59374V8.09799H7.18233L7.46667 5.16509H4.59374V3.68421C4.59374 3.27726 4.9153 2.94737 5.31197 2.94737H7.46667V0H5.31197C3.32863 0 1.72081 1.64948 1.72081 3.68421V5.16509H0.284341L0 8.09799H1.72081V14Z" fill="currentColor"></path>
                                        </svg>
                                    </IconButton>
                                </Link>
                                <Link href="#">
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <svg className="iconFooter" focusable="false" aria-hidden="true" viewBox="0 0 10 14" data-testid="TwitterIcon" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.55556 0C2.41466 0 3.11111 0.696446 3.11111 1.55556V3.88889H7.77778C8.63689 3.88889 9.33333 4.58533 9.33333 5.44444C9.33333 6.30355 8.63689 7 7.77778 7H3.11111V8.55556C3.11111 9.84422 4.15578 10.8889 5.44444 10.8889H7.77778C8.63689 10.8889 9.33333 11.5853 9.33333 12.4444C9.33333 13.3036 8.63689 14 7.77778 14H5.44444C2.43756 14 0 11.5624 0 8.55556V1.55556C0 0.696446 0.696446 0 1.55556 0Z" fill="currentColor"></path>
                                        </svg>
                                    </IconButton>
                                </Link>
                                <Link href="#">
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <svg className="iconFooter" focusable="false" aria-hidden="true" viewBox="0 0 15 11" data-testid="YoutubeIcon" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V8.25C13.5 8.66421 13.1642 9 12.75 9H2.25C1.83579 9 1.5 8.66421 1.5 8.25V2.25C1.5 1.83579 1.83579 1.5 2.25 1.5ZM0 2.25C0 1.00736 1.00736 0 2.25 0H12.75C13.9926 0 15 1.00736 15 2.25V8.25C15 9.49264 13.9926 10.5 12.75 10.5H2.25C1.00736 10.5 0 9.49264 0 8.25V2.25ZM6 3L9 5.25L6 7.5V3Z"></path>
                                        </svg>
                                    </IconButton>
                                </Link>
                                <Link href="#">
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <svg className="iconFooter" focusable="false" aria-hidden="true" viewBox="0 0 14 14" data-testid="GoogleIcon" fill="currentColor"><path d="M2.8 7C2.8 9.3196 4.6804 11.2 7 11.2C8.82871 11.2 10.3844 10.0313 10.961 8.4H7V5.6H13.8633V8.4H13.86C13.2114 11.5951 10.3865 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C9.41148 0 11.5382 1.2194 12.7971 3.07522L10.5028 4.6817C9.75071 3.54768 8.46267 2.8 7 2.8C4.6804 2.8 2.8 4.6804 2.8 7Z"></path></svg>
                                    </IconButton>
                                </Link>
                                <Link href="#">
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <svg className="iconFooter" focusable="false" aria-hidden="true" viewBox="0 0 14 14" data-testid="InstagramIcon" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3.81818C5.24273 3.81818 3.81818 5.24273 3.81818 7C3.81818 8.75727 5.24273 10.1818 7 10.1818C8.75727 10.1818 10.1818 8.75727 10.1818 7C10.1818 5.24273 8.75727 3.81818 7 3.81818ZM5.09091 7C5.09091 8.05436 5.94564 8.90909 7 8.90909C8.05436 8.90909 8.90909 8.05436 8.90909 7C8.90909 5.94564 8.05436 5.09091 7 5.09091C5.94564 5.09091 5.09091 5.94564 5.09091 7Z"></path><path d="M10.8182 2.54545C10.4667 2.54545 10.1818 2.83036 10.1818 3.18182C10.1818 3.53327 10.4667 3.81818 10.8182 3.81818C11.1696 3.81818 11.4545 3.53327 11.4545 3.18182C11.4545 2.83036 11.1696 2.54545 10.8182 2.54545Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54545 0C1.13964 0 0 1.13964 0 2.54545V11.4545C0 12.8604 1.13964 14 2.54545 14H11.4545C12.8604 14 14 12.8604 14 11.4545V2.54545C14 1.13964 12.8604 0 11.4545 0H2.54545ZM11.4545 1.27273H2.54545C1.84255 1.27273 1.27273 1.84255 1.27273 2.54545V11.4545C1.27273 12.1575 1.84255 12.7273 2.54545 12.7273H11.4545C12.1575 12.7273 12.7273 12.1575 12.7273 11.4545V2.54545C12.7273 1.84255 12.1575 1.27273 11.4545 1.27273Z"></path></svg>
                                    </IconButton>
                                </Link>
                            </Box>
                        </Box> */}

                    </Grid>
                </Grid>
            </Box >
        </>
    );
}

export default Footer;
// fast refresh cant handle anonymous components. add a name to your export
