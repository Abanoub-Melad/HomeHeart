import { KeyboardArrowUp     } from '@mui/icons-material';
import {Fab, Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';


function Floating() {
    const trigger = useScrollTrigger({threshold: 100 });
    return (
        <>
            <Zoom in={trigger} >
                <Fab
                    role="presentation"
                    onClick={() => window.scrollTo(0,0) }
                    size='small' 
                    color="primary"
                    aria-label="add"

                    sx={{ position: "fixed", bottom: 33, right: 33, zIndex: 1000  }}>
                    <KeyboardArrowUp />
                </Fab>
            </Zoom>
        </>
    )
}

export default Floating 
