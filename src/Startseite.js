import React, { Component } from 'react';



export class Startseite extends Component {


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
        
          <h1>Das ist die Startseite, hier kommst du nur rein wenn du dich eingeloggt hast!</h1>

      </div>
    )
  }
}



export default Startseite


