import { Typography } from "@mui/material"
import { Box, Stack, Container } from "@mui/system"
import { useEffect, useState } from "react";
// ???????????
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from "@emotion/react";
import CardProduct from "./Card";
import Floating from "../foating/Floating ";
// import { useGetProductByNameQuery } from '../../Rudex/Product'
// import { AnimatePresence } from "framer-motion";
import CardSkeleton from './CardSkeleton'
import { useTranslation } from "react-i18next";
import { useMyStore } from "../context/CartShopping";
const loopCardSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function Main() {
    const [alignment, setAlignment] = useState('left');

    const [category, setCategory] = useState('');
    const [optionCategory, setOptionCategory] = useState('');

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const theme = useTheme()
    const [t] = useTranslation()
    var { valueSearch, searchProduct, setRenderCards, renderCards } = useMyStore();
    // const { data, error, isLoading } = useGetProductByNameQuery(`products/${category}/${optionCategory}`)


    useEffect(() => {
        async function getProductByName() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${category}/${optionCategory}`);
                const req = await res.json();
                setRenderCards(req)
                setIsLoading(false)
            } catch (err) {
                console.log(err.message)
                setError(err.message)
            }
        }
        getProductByName()
    }, [category, optionCategory])


    function getCategory(Specific) {
        if (Specific === '') {
            setCategory('')
            setOptionCategory('')
        } else {
            setCategory('category')
            setOptionCategory(Specific)
        }
    }

    useEffect(() => {
        if (valueSearch === '') {
            setRenderCards(data)
        } else {
            searchProduct()
        }
    }, [data])



    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 7 }}>


                <Typography variant="h4" color={'error'}>
                    {error}
                </Typography >
            </Box>
        )
    }




    return (
        <Container sx={{ mt: 9 }}>
            <Stack marginBottom={5} direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                <Box>
                    <Typography variant="h6">{t(`Selected Products`)}</Typography>
                    <Typography fontWeight={300} S variant="bode1">{t(`All our new arrivals in exclusive brand selection`)}  </Typography>
                </Box>
                <Box >

                    <ToggleButtonGroup
                        color="error"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".css-tispzs-MuiButtonBase-root-MuiToggleButton-root.Mui-selected ": {
                                border: "1px solid rgba(223, 69, 96, 0.5)",
                                color: "#e94560",
                                background: "inherit",
                            }
                        }}
                    >
                        <ToggleButton
                            onClick={() => getCategory('')}
                            className="buttonCategory" sx={{ color: theme.palette.text.primary }}
                            value="left" aria-label="left aligned">
                            <Typography 
                        sx={{fontSize: {xs: '14px', md: '17px'}  }}
                            variant="body1">{(`All`)} </Typography>
                        </ToggleButton>
                        <ToggleButton
                        size="small"
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className="buttonCategory" value="center" aria-label="centered"
                            onClick={() => getCategory(`men's clothing`)}
                        >

                            <Typography   sx={{fontSize: {xs: '14px', md: '17px'}  }}
                                        variant="body1" >{t(`Mean Category`)}  </Typography>
                        </ToggleButton>
                        <ToggleButton
                            onClick={() => getCategory(`women's clothing`)}
                            className="buttonCategory" sx={{ color: theme.palette.text.primary }}
                            value="right" aria-label="right aligned">
                            <Typography 
                            sx={{fontSize: {xs: '14px', md: '17px'}  }}

                            variant="body1" >{t(`Women Category`)}  </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Stack>
            <Grid container
                direction="row"
                alignItems="center"
                spacing={{ xs: 2, md: 4 }}
                sx={{ mt: 3, mb: 10 }}
            >
                {
                    isLoading ? (
                        loopCardSkeleton.map((one) => (
                            <Grid item xs={12} sm={6} md={4} key={one}>
                                <CardSkeleton />
                            </Grid>
                        ))
                    ) : (
                        renderCards.map((oneCard) => (
                            <Grid item key={oneCard.id} xs={12} sm={6} md={4} >
                                <CardProduct oneCard={oneCard} />
                            </Grid>
                        )
                        )
                    )
                }
            </Grid>
            <Floating />
        </Container>
    )
}



export default Main


