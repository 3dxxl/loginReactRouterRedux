import {createStore} from 'redux';
import {reducer} from './MeinReducer';

export const initialState = {

    email: "",
    password:"",
    istAusgeloggt:JSON.parse(localStorage.getItem("react-localStorage-user")) ? true : false,
    navigationEinblenden:false,
};




//wichtig: zuerst der reducer dann der initialState = createStore(initialState, reducer, ...)
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
