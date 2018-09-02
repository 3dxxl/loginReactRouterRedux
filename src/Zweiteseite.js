import React, { Component } from 'react'



export class Zweiteseite extends Component {

 //Hier sage ich mit componentDidMount, das wenn der Client nicht der user ist soll er auf die erste Seite landen
 componentDidMount() {
    let user = JSON.parse(localStorage.getItem("react-localStorage-user"));
    if (!user) {
        this.props.history.push("/")
    };
}


 

  render() {

    return (

      <div>
        Das ist die Zweiteseite
      </div>

    )
  }
}

export default Zweiteseite;