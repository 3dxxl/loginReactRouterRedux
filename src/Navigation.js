import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import  './App.css';

//react router
import { withRouter } from "react-router-dom";

import {connect} from 'react-redux';
import {actionCreators} from './redux/MeineActions';

//Semantic UI
import { Menu, Button } from 'semantic-ui-react'

//Die Komponente Navigation kann direkt auf den Store zugreifen, da Sie in der index.js Datei 
//innerhalb von <Provider store={store}> steht und somit jeden zustand über die props abrufen kann
//Wichtig: Aber um zustand Änder in dieser Navogations Komponente zu sehen, muss ich 
//trotzdem noch connect&actionCreators und mapStateToProps Funktion & connect ausführen

//Um Semantic UI mit react router zu verbinden, muss man as={NavLink} zum Link verweis einsetzen, 
//und dann natürlich die jeweitlige adresse z.b. die Startseite mit to="/"


class Navigation extends Component {


     //Auslogg Anweisung
    componentWillUpdate(nextProps) {
      if (nextProps.istAusgeloggt){
              localStorage.clear();
            console.log("Sie sind jetzt ddausgeloggt"); 
              this.props.history.push("/");
            }
  
      }
    


  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (


      <div>

          {/*{this.state.navigationEinblenden && (..)} bedeutet das Zustand vom Objekt navigationEinblenden true ist
        also nicht false, dann für in diesem Beispiel die externe Komponente aus*/}
        {this.props.navigationEinblenden && ( 

          <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          as={NavLink} 
          to="/Startseite"
          style={{color:this.props.farbe, fontFamily: this.props.schriftNav,}}
        >
          Startseite
        </Menu.Item>

        <Menu.Item 
        name='reviews' 
        active={activeItem === 'reviews'} 
        onClick={this.handleItemClick}
        as={NavLink} 
        to="/Zweiteseite"
        >
          ZweiteSeite
        </Menu.Item>


        <div className="right menu">
         <Button 
      onClick={this.props.ausLoggAction}
        >Ausloggen
        </Button>
        
        </div> 

      </Menu>


        ) }

          
    

      </div>
    );
  }
}


//Hier kommen die Zustände aus MeinStore.js rein um diese dann mit props zu verwenden
function mapStateToProps (state) {
    return {
        istAusgeloggt:state.istAusgeloggt,
        navigationEinblenden:state.navigationEinblenden
    }
}


export default withRouter(connect(mapStateToProps, actionCreators)(Navigation))


