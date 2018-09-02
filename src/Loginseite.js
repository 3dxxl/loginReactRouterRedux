import React, { Component } from "react";
import "./App.css";

//react router
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { actionCreators } from "./redux/MeineActions";

//Semantic UI Elemente
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

import { loginUser } from "./Firebase";

class Loginseite extends Component {
  emailEventHandler = event => {
    this.setState({ email: event.target.value });
  };

  passwordEventHandler = event => {
    this.setState({ password: event.target.value });
  };

  //Hier wird dem Button die zweiFunktionen Funktion übergeben, in dieser Funktion
  //wird der loginUser Funktion der Zustand der email und des Passworts übergeben und die Funktion ausgeführt
  //nämlich die loginUser Funktion die in der FirebaseLoggin.js Datei steht
  //stimmen die Daten überein, werden im LocalStorage die Daten beim Client gespeichert
  //und er wird auf die zweite seite weitergeleitet.
  //mit catch error wird eine Fehler Meldung als alert aussgegeben
  zweiFunktionen = () => {
    loginUser(this.state.email, this.state.password)
      .then(response => {
        console.log(response.user);
        localStorage.setItem(
          "react-localStorage-user",
          JSON.stringify(response.user)
        );
        this.props.history.push("/Startseite");
      })

      .catch(error =>
        console.log(
          error.toString(
            alert("Die Eingabe ist falsch, oder Sie sind noch nicht angemeldet")
          )
        )
      );
  };

  render() {
    return (
      <div className="login-form">
        {/*
                    Heads up! The styles below are necessary for the correct render of this example.
                    You can do same with CSS, the main idea is that all the elements up to the `Grid`
                    below must have a height of 100%.
                */}
        <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={require("./logo.svg")} /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  onChange={this.emailEventHandler}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.passwordEventHandler}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={event => {
                    this.zweiFunktionen();
                    this.props.einLoggAction();
                  }}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            {/* 
                            <Message>
                                New to us? <a href='#'>Sign Up</a>
                            </Message> 
                        */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

//Hier kommen die Zustände aus MeinStore.js rein um diese dann mit props zu verwenden
function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password,
    navigationEinblenden: state.navigationEinblenden
  };
}

//wichtig: ich musste heir SignIn eintragen anstatt (App)

export default withRouter(
  connect(
    mapStateToProps,
    actionCreators
  )(Loginseite)
);
