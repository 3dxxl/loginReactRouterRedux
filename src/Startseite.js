import React, { Component } from "react";

//react router
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { actionCreators } from "./redux/MeineActions";

export class Startseite extends Component {
  //Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
    if (!user) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <h1>
          Das ist die Startseite, hier kommst du nur rein wenn du dich
          eingeloggt hast!
        </h1>
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
  )(Startseite)
);
