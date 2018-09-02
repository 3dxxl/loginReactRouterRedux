import React, { Component } from 'react';
//react router
import { HashRouter, Route } from "react-router-dom";
import Loginseite from './Loginseite';
import Startseite from './Startseite';
import Zweiteseite from './Zweiteseite';
//Die Navigation
 import Navigation from './Navigation';


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	loggedIn: JSON.parse(localStorage.getItem("react-localStorage-user")) ? true : false
        }
    }

    render() {
    const { loggedIn } = this.state;
        return (
            <HashRouter>
            	<div>
				    { loggedIn && <Navigation/>}
				    <Route exact={true} path={"/"} component={Loginseite}/>
				    <Route exact={true} path={"/Startseite"} component={Startseite}/>
				    <Route exact={true} path={"/Zweiteseite"} component={Zweiteseite}/>		    
		    	</div>
            </HashRouter>
        );
    }
}

export default Routes;
