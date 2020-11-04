import { MocUser } from "./../../shared/model/moc-user.model";
import * as MocUserActions from "./../actions/moc-user.action";  

const initialState: MocUser = { login: "MrSdk", password: "qwe123" };

export function mocUserReducer ( state: MocUser[] = [initialState], action: MocUserActions.Actions ){

    switch (action.type) {
        
        case MocUserActions.CREATE : {
            return [...state , action.payload];
        } 

        case MocUserActions.GETBYID: {
            let mocUser = state.find((res,index) => index == action.payload);

            return { ...state, mocUser };
        }

        default: {
            return state;
        } 
    }

} 