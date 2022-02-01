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
    backgroundColor: "#12071a",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },

  background: {
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mainGrid: {
    marginTop: "20px",
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
    marginTop: "1px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    width: "95%",
    marginLeft: "20px",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: "10px",
    fontWeight: 500,
  },
  input: {
    color: "white",
    backgroundColor: "#362245",
    height: 80,
    fontSize: "25px",
  },
  button: {
    width: "70%",
    height: 60,
    marginTop: "40px",
    fontSize: "20px",
    marginLeft: "125px",
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
    marginBottom: "5px",
  },

  floatingLabelFocusStyle: {
    color: "white",
    fontSize: "20px",
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
      <Grid item sm={6} md={3} className={classes.background} />
      <Grid
        style={{ backgroundColor: "#180c2b" }}
        xs={10}
        sm={2}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <div style={{ color: "#474745" }} className={classes.paper}>
          <Avatar
            sm={{ width: 86, height: 86 }}
            className={classes.avatar}
            spacing={4}
          ></Avatar>
          <Typography className={classes.SignText} component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2} className={classes.mainGrid}>
              <Grid item xs={12} sm={5}>
                <TextField
                  className={classes.textField}
                  style={{ width: "113%" }}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  margin="normal"
                  color="secondary"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  className={classes.textField}
                  style={{ marginLeft: "75px", width: "114%" }}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  margin="normal"
                  color="secondary"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="given-name"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  margin="normal"
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  margin="normal"
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  required
                  fullWidth
                  //backgroundColor="#fcfaf7"
                  color="secondary"
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
            </Grid>

            <br />

            <Button
              justify="space-around"
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
              Sign up
            </Button>
            <Grid
              container
              justify="space-around"
              spacing={4}
              style={{ padding: 20 }}
            ></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
