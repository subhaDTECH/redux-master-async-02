import {GET_ALL_PRODUCT_REQUEST,SELECT_ALL_PRODUCT, SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT}
from "../constants/productConstant.js"


const initialState={
    products:[],
    product:{},
};

export const getProducts=(state=initialState,action)=>{

    switch(action.type){

        case SELECT_ALL_PRODUCT:
            return{
                ...state,
                products:action.payload,

            };
            case SELECTED_PRODUCT:
                return{
                    ...state,
                    product:action.payload,
    
                };

                case REMOVE_SELECTED_PRODUCT:
                    return {
                        ...state,
                        product:{}
                    }
            default:
                return state;
    }



}

