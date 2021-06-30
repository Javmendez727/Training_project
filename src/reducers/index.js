import {combineReducers} from "redux";
import {form} from "./form/form";
import {list_form} from "./form/list_form";

const rootReducer = combineReducers({list_form});

export default rootReducer;