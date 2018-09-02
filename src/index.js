import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//Semantic UI CSS
import 'semantic-ui-css/semantic.min.css';

//react router
import { HashRouter, Route } from "react-router-dom";
import Loginseite from './Loginseite';
import Startseite from './Startseite';
import Zweiteseite from './Zweiteseite';

//redux
import {store} from './redux/MeinStore';
import {Provider} from 'react-redux';


//Die Navigation
import Navigation from './Navigation';

ReactDOM.render(
<Provider store={store}>

<HashRouter>
    
    <div>
    
    
    <Route exact={true} path={"/"} component={Loginseite}/>
    <Route exact={true} path={"/Startseite"} component={Startseite}/>
    <Route exact={true} path={"/Zweiteseite"} component={Zweiteseite}/>

    
    </div>
    </HashRouter>

</Provider>



, document.getElementById('root'));
registerServiceWorker();
