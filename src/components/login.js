import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
//import userService from "../services/UserService";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "./bg.jpg";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    //backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: 86,
    height: 86,
    marginTop: '30px'
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: '50px',
    fontWeight: 500,
  },
  input: {
    color: "white",
    backgroundColor: "#362245",
    height: 80,
    fontSize: '25px'
  },
  button: {
      width: '70%',
    height: 60,
    marginTop: "40px",
    fontSize: '20px',
    marginLeft: '120px'
  },
  checkBox: {
    color: "white",
  },
  Link: {
    color: "white",
    fontSize: "18px",
    marginTop: "40px",
  },
  SignText: {
    color: "white",
    fontSize: "42px",
    marginTop: "5px",
  },

  floatingLabelFocusStyle: {
    color: "white",
    fontSize: '20px'
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        style={{ backgroundColor: "#180c2b" }}
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div style={{ color: "#474745" }} className={classes.paper}>
          <Avatar sm={{ width: 86, height: 86 }} className={classes.avatar} spacing={4}></Avatar>
          <Typography className={classes.SignText} component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.textField}
              InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
              InputProps={{
                className: classes.input,
              }}
              variant="filled"
              margin="normal"
              color="secondary"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
            className={classes.textField}
              variant="filled"
              margin="normal"
              InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
              InputProps={{
                className: classes.input,
              }}
              required
              fullWidth
              //backgroundColor="#fcfaf7"
              color="secondary"
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              className="textfiled__label"
              control={
                <Checkbox
                  className={classes.checkBox}
                  style={{
                    color: "white",
                  }}
                  className="textfiled__label"
                  value="remember"
                  color="white"
                />
              }
              label={
                <Typography style={{ color: "white" }}>Remember me</Typography>
              }
            />
            <br />
            <Button justify="space-around"
              className={classes.button}
              fullWidth
              variant="contained"
              color="default"
              onClick={(e) => {
                // userService
                //   .login(email, password)
                //   .then((data) => {
                //     console.log(data);
                //     window.location.href = "/";
                //   })
                //   .catch((err) => {
                //     return alert("Password or Email incorrect");
                //   });
              }}
            >
              Login
            </Button>
            <Grid container justify="space-around" spacing={4} style={{ padding: 20 }}>
              <Grid item >
                <Link className={classes.Link} href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
