import { Container, Box, Typography, Grid } from "@mui/material"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useTheme } from "@emotion/react";
import './Icon.css'
import { useTranslation } from "react-i18next";

function IconSec() {
    const theme = useTheme()
    const [t] = useTranslation()
    return (
        <Container sx={{ my: 1, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
            < Grid container columnSpacing={2} py={1} >
                <Grid item xs={12} md={6} lg={3}  >
                    <Box
                        className="noneBorder"
                        sx={{
                            gap: 3,
                            display: "flex",
                            flexGrowl: 1,
                            alignItems: "center",
                            justifyContent: "center", [theme.breakpoints.down("md")]: { justifyContent: "start" },
                            borderRight: "1px solid #DAE1E7"
                            // borderRight: "1px solid red", [theme.breakpoints.down("sm")]: { borderRight: "none" },
                        }}
                    >

                        <ElectricBoltIcon fontSize="large" />
                        <Box >
                            <Typography variant="h6">{t(`FastDelivery`)}</Typography>
                            <Typography
                                sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
                                variant="body2">{t(`StartFrom $10`)}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box
                        className="noneBorder"
                        sx={{
                            gap: 3,
                            display: "flex",
                            flexGrowl: 1,
                            alignItems: "center",
                            justifyContent: "center", [theme.breakpoints.down("md")]: { justifyContent: "start", },
                            borderRight: "1px solid #DAE1E7", [theme.breakpoints.between('sm', 'md')]: { borderRight: "none" }
                        }}
                    >
                        <WorkspacePremiumIcon fontSize="large" />
                        <Box >
                            <Typography variant="h6">{t(`MoneyGuarantee`)}</Typography>
                            <Typography
                                sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
                                variant="body2">{t(`7 DaysBack`)}</Typography>
                        </Box>

                    </Box>

                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Box
                        className="noneBorder"
                        sx={{

                            gap: 3,
                            // py: 1.5,
                            display: "flex",
                            flexGrowl: 1,
                            alignItems: "center",
                            justifyContent: "center", [theme.breakpoints.down("md")]: { justifyContent: "start" },
                            borderRight: "1px solid #DAE1E7"
                            // borderRight: "1px solid red", [theme.breakpoints.down("sm")]: { borderRight: "none" },
                        }}
                    >
                        <AccessAlarmIcon fontSize="large" />
                        <Box >
                            <Typography variant="h6">{t(`365 Days`)}</Typography>
                            <Typography
                                sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
                                variant="body2">{t(`ForFree`)}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box
                        className="noneBorder"
                        sx={{
                            gap: 3,
                            display: "flex",
                            flexGrowl: 1,
                            alignItems: "center",
                            justifyContent: "center", [theme.breakpoints.down("md")]: { justifyContent: "start", },
                            // borderRight: "1px solid red", [theme.breakpoints.down("sm")]: { borderRight: "none" },
                        }}
                    >
                        <CreditScoreIcon fontSize="large" />
                        <Box >
                            <Typography variant="h6">{t(`Payment`)} </Typography>
                            <Typography
                                sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
                                variant="body2">{t(`SecureSystem`)}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}

export default IconSec

