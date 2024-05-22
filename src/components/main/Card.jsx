import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  useState, lazy } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CardActions, Rating, Button, IconButton } from '@mui/material';
import { Close } from "@mui/icons-material";
import Dialog from '@mui/material/Dialog';
const DetailsCard = lazy(() => import('./DetailsCard'))
import { AnimatePresence, motion } from "framer-motion";
import { useMyStore } from '../context/CartShopping';

// import { useGetProductByNameQuery } from '../../Rudex/Product';
// import { makeStyles } from '@material-ui/core';
// import makeStyles from '@mui/styles/makeStyles';
// import Paper from '@mui/material/Paper';
// import { makeStyles } from '@material-ui/core'
// const useStyles = makeStyles({
//     img:{
//         objectFit: 'fill',
//         border: '10px solid red'
//     }
// })

function CardProduct({ oneCard }) {
    // console.log(";;;;;",oneCard)
    const [value, setValue] = useState(2);
    const [open, setOpen] = useState(false);
    const { setGitID } = useMyStore()
    const handleClickOpen = (catchID) => {
        setOpen(true);
        setGitID(catchID)
    };

    const handleClose = () => {
        setOpen(false);
    };


    
    return (
        <>
            <AnimatePresence>
                <Card
                    component={motion.section}
                    layout
                    sx={{
                        maxWidth: {xs: 350, md: 360},
                        ":hover .MuiCardMedia-root ": { rotate: "1deg", scale: 1.2, transition: ".5s" },
                    }}>
                    <CardMedia
                            loading="lazy" decoding="async"
                        // className={myClass}
                        // className='.css-1l3qfs3-MuiCardMedia-root'
                        component="img"
                        height="194"
                        // image="https://mui.com/static/images/cards/paella.jpg"
                        image={oneCard.image}
                        sx={{
                            ".MuiCardMedia-root"
                                : { objectFit: 'fill', border: "40px solid red" }
                        }}
                        alt="Paella dish"
                    />
                    <CardContent>
                        {/* <Typography component="span" variant="span" color="text.secondary">
                        $ {oneCard.price} 
                        </Typography> */}
                        <Typography className='lineClamp' variant="h6" gutterBottom color="text.primary">
                            {oneCard.title}
                        </Typography>
                        {/* </Stack> */}
                        <Typography className='texrTitle' variant="body2" color="text.secondary">
                    {oneCard.description } 
                    </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button
                            onClick={() => handleClickOpen(`${oneCard.id}`)}
                            sx={{ textTransform: "capitalize" ,  fontSize:'18px' }} size="large">
                                Details       
                            <ArrowForwardIosIcon fontSize='small' sx={{ ml: 1 }} />
                        </Button>
                        <Rating
                            name="simple-controlled"
                            value={oneCard.rating.rate}
                            // size="small"
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        ({oneCard.rating.count})
                    </CardActions>
                </Card>
            </AnimatePresence>
            <Dialog
                sx={{
                    ".MuiPaper-root" : {xs: {maxWidth: '300px'}, sm: {maxWidth: '500px' }, md: {maxWidth: '700px', }}
            
                
                }
            }
                open={open}
                onClose={() => handleClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <IconButton
                    onClick={handleClose}
                    sx={{ position: "absolute", top: "4px", right: "2%", ":hover": { scale: "1.09", transition: ".3s" } }}
                >
                    <Close />
                </IconButton>
                <DetailsCard  />
            </Dialog>
        </>
    );
}

export default CardProduct
