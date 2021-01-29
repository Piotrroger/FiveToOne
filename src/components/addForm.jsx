import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

//Google Icon imports
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";



  



const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e8e8e8"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  },
  TextField: {
    backgroundColor: "#fff"
  }
});


class Register extends Component {
    render() {
      
      const { classes, registerError, isRegistered} = this.props;
        return (
          <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
              <Typography component="h2" variant="h6">
              </Typography>
              <Avatar className={classes.avatar}>
                <LockOpenOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                New Feedback
              </Typography>
              <TextField
                className={classes.TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                onChange={this.handleFirstNameChange}
              />
              <TextField
                className={classes.TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="surname"
                label="Last Name"
                name="surname"
                onChange={this.handleLastNameChange}
              />
              <TextField
                className={classes.TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="login"
                label="Alias(login)"
                name="login"
                onChange={this.handleLoginChange}
              />
              <TextField
                className={classes.TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={this.handleEmailChange}
              />
              <TextField
                className={classes.TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.handlePasswordChange}
              />
            </Paper>
          </Container>
        );
      }
    }

  export default withStyles(styles)(Register);