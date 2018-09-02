import React, { Component } from 'react';
//react router
import { HashRouter, Route } from "react-router-dom";
import Loginseite from './Loginseite';
import Startseite from './Startseite';
import Zweiteseite from './Zweiteseite';
//Die Navigation
 import Navigation from './Navigation';
import { connect } from 'react-redux';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	loggedIn: props.navigationEinblenden
        }
    }

    render() {
    const { istAusgeloggt } = this.props;
        return (
            <HashRouter>
            	<div>
				    <Navigation/>
				    <Route exact={true} path={"/"} component={Loginseite}/>
				    <Route exact={true} path={"/Startseite"} component={Startseite}/>
				    <Route exact={true} path={"/Zweiteseite"} component={Zweiteseite}/>		    
		    	</div>
            </HashRouter>
        );
    }
}
function mapStateToProps (state) {
    console.log(state)
    return {
        istAusgeloggt:state.istAusgeloggt,
        navigationEinblenden:state.navigationEinblenden
    }
}
export default connect(mapStateToProps)(Routes);
