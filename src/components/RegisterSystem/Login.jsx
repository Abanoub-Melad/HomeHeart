import { useEffect, useRef, useState } from "react";
import { Paper, Box, Checkbox, FormControlLabel, Typography, Button, Grid } from "@mui/material"

import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function Login() {

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState(null);
    const [validConfirmPwd, setValidConfirmPwd] = useState(false);

    const [checkConfirmPwd, setCheckConfirmPwd] = useState(false);
    const navigate = useNavigate()
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    useEffect(() => {
        const resultPwd = PWD_REGEX.test(confirmPwd);
        setValidConfirmPwd(resultPwd);
    }, [confirmPwd]);

    useEffect(() => {
        const check = validPwd === validConfirmPwd
        setCheckConfirmPwd(check)
    }, [ validConfirmPwd, validPwd]);

    console.log( pwd );
    console.log( checkConfirmPwd );

    // useEffect(() => {
    //     const result = PWD_REGEX.test(pwd);
    //     setValidPwd(result);

    //     const resultPwd = PWD_REGEX.test(confirmPwd);
    //     setValidConfirmPwd(resultPwd);
    //     const check = validPwd === validConfirmPwd
    //     setCheckConfirmPwd(check)

    // }, [ pwd, confirmPwd,validConfirmPwd, validPwd]);



    // function handleKeyPress(e) {
    //     if (e.key === 'Enter') {
    //         handleLogin()
    //     }
    // }
    function handleSubmit(e) {
        e.preventDefault();
    }
    // console.log(pwd);
    //   function handleLogin() {
    //     auth.Login(user);
    //     // navigate("/profile", { replace: true })
    //     toast.success("Successfully");
    //     // ?????????????????????????????????????????
    //     navigate(redirectionPath, { replace: true });
    //     toast.success(`Welcome ${user}`)
    //   }

  
    return (
        <>
        <Box  sx={{display: 'flex',  alignItems: 'center', justifyContent: 'center',
                    height: '100vh'}}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item sx={12} md={5}  >

                <Paper elevation={6}
                        sx={{ px: 4, py: 2, borderRadius: 3 }}
                    >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="logoRegister" decoding="async" loading="lazy" alt="logoRegister"
                        src="../../../public/images/bazaar-black-sm.c758d695.jpg" />
                    <h3>Welcome To Bazaar</h3>
                </Box>
                <form  onSubmit={handleSubmit} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                        <Typography variant="h6" component="label"
                            htmlFor="inputFullNameMat" fontSize={14}>
                            Email 
                        </Typography>
                        <TextField required  inputRef={inputRef}  size="small" error id="outlined-basic" variant="outlined"
                            placeholder=".....@gmail.com"
                            name="email" id="outlined-error" type="email" 
                             />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                        <Typography variant="h6" component="label"
                            htmlFor="inputFullNameMat" fontSize={14}>
                            Password
                        </Typography>
                        <TextField required error  size="small" placeholder="password" id="outlined-basic" variant="outlined"
                            name="password" id="outlined-error" type="password" 
                                value={pwd}
                            onChange={(e) => setPwd(e.target.value)} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                        <Typography variant="h6" component="label"
                            htmlFor="inputFullNameMat" fontSize={14}>
                                    Confirm password
                        </Typography>

                        <TextField required error  size="small" placeholder="password" id="outlined-basic" variant="outlined"
                            name="confirm password" id="outlined-error" type="password"
                             value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)}  />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >

                        <FormControlLabel required control={<Checkbox />} label="By signing up, you agree to Terms & Condition" />

                    </Box>
                    <Button variant="contained" 
                    sx={{width: '100%', background: "#D23F57"}} 
                    disabled={  checkConfirmPwd ?  false : true} 
                    onClick={() => navigate('/') } >
                       
                        Login</Button>
                        
                </form>

            </Paper>

            </Grid>
            </Grid>
            </Box>

        </>
    );
}
export default Login;

