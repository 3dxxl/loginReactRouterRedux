import {initialState} from './MeinStore';


 

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "hatSicheingeloggt": 
        
            return {

             

                ...state, 
                //istEingeloggt: alert("hallo"),
                email: state.email,
                password: state.password,
                navigationEinblenden:true
               
                
            };

        case "hatSichAusgeloggt": 

            return {
                ...state,
                istAusgeloggt: true,
                navigationEinblenden:true
                
                


                    
                };
                
            

        default:

            return state

    }
}
