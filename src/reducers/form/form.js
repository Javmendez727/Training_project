
import { actionTypes } from "../../actions";


const form = (state = [], action) => {

    if(!action){
        return state;
    }
    switch(action.type) {
        case actionTypes.ADD_FORM_DATA:
          return state.concat([action.data]);
        default:
          return state;
      }
}
export default form;