import * as firebase from 'firebase';



  const config = {
    apiKey: "AIzaSyBgiEF-ADJSNkMurdQzdIH_T_dMkif9TfI",
    authDomain: "routermitlogin.firebaseapp.com",
    databaseURL: "https://routermitlogin.firebaseio.com",
    projectId: "routermitlogin",
    storageBucket: "routermitlogin.appspot.com",
    messagingSenderId: "996386580431"
  };
  firebase.initializeApp(config);

//const muss ich zur funktion setzen, sonst gehts nicht, hier wird die firebase.auth() Funktion ausgeführt
//dieserFunktion werden die Parapemter email &Passwort übergeben.
//
export const loginUser = (email, password) => {
 
    return firebase.auth().signInWithEmailAndPassword(email, password);
    
    
}
