import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { CLIENT_ID } from "../../Utilities/constants";

import { loginRequest,
   fetchOrderSummaryRequest,
   listProductRequest,
   fetchOrdersRequest,
   FetchBrandRequest,
   userFeedbackRequest } 
   from "../../Services/dataService";

   import { NETWORK_ERROR } from "../../Utilities/constants";

import { connect } from "react-redux";
import { loginSuccess,fetchOrderSummary } from "../../Redux/actions/action";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        One Hub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  //state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //onChangeEvents
  const emailHandler = (email) => {
    setEmail(email);
  };

  const passwordHandler = (userPassword) => {
    setPassword(userPassword);
  };

  //OnSubmitEvents
  const LoginHandler = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      let loginObj = {
        email: email,
        password: password,
        client_id: CLIENT_ID,
      };

      //API CALL
      let loginResponse = await loginRequest(loginObj);

      //EXTRACTED ROLE & TOKEN FROM API
      const role = loginResponse.data.payload.data.admin.role;
      const token = loginResponse.data.payload.data.token;
      
      //CHECKING LOGIN RESPONSE 

      if (loginResponse === NETWORK_ERROR) {
        //LOGIN RESPONSE IF SECTION

      } 
      else
      {
        //LOGIN RESPONSE ELSE SECTION
        const status = loginResponse.data.metadata.status;
        if (status === "SUCCESS") {
          props.loginSuccess(loginResponse);

          if(role === 'SuperAdmin'){
            //ROLE IF
            const obj = {
              days: "7",
            };

            const orderSummaryResponse = await fetchOrderSummaryRequest(obj,token);
            if (orderSummaryResponse === NETWORK_ERROR) {

            } else {
                // props.fetchOrderSummary(orderSummaryResponse);
            }

            const productResponse = await listProductRequest(token);
            if (productResponse === NETWORK_ERROR) {
             
            } else {
              

            }

            const ordersResponse = await fetchOrdersRequest(token);
            if (ordersResponse === NETWORK_ERROR) {
              
            } else {
              
              
            }

            const brandResponse = await FetchBrandRequest(token);
            if (brandResponse === NETWORK_ERROR) {

            } 
            else {
              
            }


            const feedbackResponse = await userFeedbackRequest(token);
            if (feedbackResponse === NETWORK_ERROR) {
              
            } 
            else{
              
            }

            

          }
          else if(role === "ADMIN"){
            //ELSE IF ROLE

          }
         
        }
        else{
          // ELSE STATUS
        } 
      }

    }
   else 
   {
      //ELSE OF 1ST IF
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={LoginHandler} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                emailHandler(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                passwordHandler(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onSubmit={LoginHandler}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (userData) => dispatch(loginSuccess(userData)),
  //   fetchOrderSummary: (orderSummaryData) =>
  //     dispatch(fetchOrderSummary(orderSummaryData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
