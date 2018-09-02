import {initialState} from './MeinStore';


 

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "hatSicheingeloggt": 
        
            return {

             

                ...state, 
                //istEingeloggt: alert("hallo"),
                email: state.email,
                password: state.password,
               
                
            };

        case "hatSichAusgeloggt": 

            return {
                ...state,
                istAusgeloggt: true,
                
                


                    
                };
                
            

        default:

            return state

    }
}
