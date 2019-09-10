import React from 'react';
import { Grid, CircularProgress, Typography, Button, TextField, Fade } from "@material-ui/core";
// import { withRouter } from "react-router-dom";
// import classnames from "classnames";
import blackbelt from "./blackbelt.svg";
import useStyles from "./styles";

function Login() {
    var classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <div className={classes.logotypeContainer}>
                <img src={blackbelt} alt="logo" className={classes.logotypeImage} />
                <Typography className={classes.logotypeText}>Mensalidade GYM</Typography>
            </div>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                    <React.Fragment>
                        <Fade>
                            <Typography color="secondary" className={classes.errorMessage}>
                                Something is wrong with your email or password :(
                            </Typography>
                        </Fade>
                        <TextField
                            id="email"
                            InputProps={{
                                classes: {
                                    underline: classes.textFieldUnderline,
                                    input: classes.textField,
                                },
                            }}                            
                            margin="normal"
                            placeholder="Email"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            id="senha"
                            InputProps={{
                                classes: {
                                    underline: classes.textFieldUnderline,
                                    input: classes.textField,
                                },
                            }}                            
                            margin="normal"
                            placeholder="Senha"
                            type="password"
                            fullWidth
                        />
                        <div className={classes.formButtons}>
                            <CircularProgress size={26} className={classes.loginLoader} />
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Login
                            </Button>
                        </div>
                        <Typography color="primary" className={classes.copyright}>
                            © 2019 Positrônica.
                        </Typography>
                    </React.Fragment>                        
                </div>
            </div>
        </Grid>
    );
}

export default Login;
