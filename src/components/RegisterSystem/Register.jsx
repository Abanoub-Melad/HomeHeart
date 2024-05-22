






import { useEffect, useRef, useState } from "react";
import { Paper, Box, Checkbox, FormControlLabel, Typography, Button, Grid } from "@mui/material"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function Register() {

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);


    const [matchInput, setMatchInput] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);

    const [checkMatch, setCheckMatch] = useState(false);
    const navigate = useNavigate()
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const resultPwd = PWD_REGEX.test(pwd);
        setValidPwd(resultPwd);
    }, [pwd]);

    useEffect(() => {
        const result = PWD_REGEX.test(matchInput);
        setValidMatchPwd(result)
    }, [ matchInput]);

    useEffect(() => {
        const check = validMatchPwd === validPwd
        setCheckMatch(check);
    }, [ validMatchPwd , validPwd])
  


    // function handleKeyPress(e) {
    //     if (e.key === 'Enter') {

    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();
    }
    console.log(pwd);
    
    //   function handleLogin() {
    //     auth.Login(user);
    //     // navigate("/profile", { replace: true })
    //     toast.success("Successfully");
    //     // ?????????????????????????????????????????
    //     navigate(redirectionPath, { replace: true });
    //     toast.success(`Welcome ${user}`)
    //   }

    return (
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item sx={12} md={5}>

                    <Paper elevation={6}
                        sx={{ px: 4, py: 2, borderRadius: 3 }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img className="logoRegister" decoding="async" loading="lazy" alt="logoRegister"
                                src="../../../public/images/bazaar-black-sm.c758d695.jpg" />
                            <h3>Welcome To Bazaar</h3>
                        </Box>
                        <form onSubmit={handleSubmit} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                                <Typography variant="h6" component="label"
                                    htmlFor="inputFullNameMat"
                                    fontSize={14}     >

                                    Username
                                </Typography>
                                <TextField  required size="small" error id="outlined-basic" variant="outlined"
                                    inputRef={inputRef}

                                    placeholder="name"
                                    name="Name" id="outlined-error" type="Name"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                                <Typography variant="h6" component="label"
                                    htmlFor="inputFullNameMat" fontSize={14}>
                                    Email
                                </Typography>
                                <TextField  required size="small" error id="outlined-basic" variant="outlined"
                                    placeholder=" .....@gmail.com"
                                    name="email" id="outlined-error" type="email"
                                />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                                <Typography variant="h6" component="label"
                                    htmlFor="inputFullNameMat" fontSize={14}>
                                    Password
                                </Typography>
                                <TextField  required error size="small" placeholder="password" id="outlined-basic" variant="outlined"
                                    name="password" id="outlined-error" type="password"
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                                <Typography variant="h6" component="label"
                                    htmlFor="inputFullNameMat" fontSize={14}>
                                    Confirm password

                                </Typography>

                                <TextField  required error size="small" placeholder="password" id="outlined-basic"
                                    variant="outlined"
                                    name="password" id="outlined-error" type="password"
                                    value={matchInput}
                                    onChange={(e) => setMatchInput(e.target.value)} />

                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                                <FormControl>
                                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>



                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >

                                <FormControlLabel required control={<Checkbox />} label="By signing up, you agree to Terms & Condition" />

                            </Box>
                            <Button
                                type="submit" disabled={ checkMatch ?   false   : true}
                                variant="contained"
                                sx={{ width: '100%', background: "#D23F57" }} onClick={() => navigate('/') } >Sign up</Button>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }} >
                                <Typography variant="p" component="label"
                                    htmlFor="inputFullNameMat" fontSize={18}>
                                    Don't have a Account ? <Link  to={'/Login'}  > Login Now !</Link>

                                </Typography>



                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
    );
}
export default Register;






