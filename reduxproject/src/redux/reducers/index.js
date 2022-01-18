import { combineReducers } from "redux";
import {getProducts} from "./productReducer";

const rootReducer=combineReducers({
    allproducts:getProducts
     
})


export default rootReducer;