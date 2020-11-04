import { Action } from "@ngrx/store";
import { Tutorial } from "./../../shared/model/tutorial.model";
import * as TutorialActions from "./../actions/tutorial.action";

const initialState: Tutorial = {
    name: "Udemy",
    url: "https://udemy.com"
}

export function  tutorialReducer( state: Tutorial[] = [initialState], action: TutorialActions.Actions ){
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:{ 
            return [ ...state, action.payload ]
        };

        case TutorialActions.REMOVE_TUTORIAL: {  
            
            state = [...state]; 
             
            state.splice(action.payload,1);
            // console.log(state);
            

            return state;
        }
    
        default:
            return state;
    }
}