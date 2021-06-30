import { actionTypes } from "../../actions";

const INITIAL_STATE = {
    'name': '',
    'surname': '',
    'email': '',
    'amount': 0,
};

export const list_form = (state = INITIAL_STATE, action ) =>{
    if(!action){
        return state;
    }

    switch(action.type){
        case actionTypes.GET_FORM_DATA:
            return {
                ...state,
        }
        default:
            return state;
    }
};