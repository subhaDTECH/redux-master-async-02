import {GET_ALL_PRODUCT_REQUEST,SELECT_ALL_PRODUCT, SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT}
from "../constants/productConstant.js"
import axios from "../../apis/axiosApis"

// export const  setProducts=(products)=>{
//   return {
//       type:SELECT_ALL_PRODUCT,
//       payload:products
//   }

// }

export const setProducts=()=>async(dispatch)=>{
    const res=await axios.get("/products");
    console.log(res)
    dispatch({type:SELECT_ALL_PRODUCT,payload:res.data});

    

}


// export const  setProduct=(product)=>{
//     return {
//         type:SELECTED_PRODUCT,
//         payload:product
//     }
  
//   }

export const setProduct=(id)=>async (dispatch)=>{
    const res=await axios.get(`/products/${id}`);
    dispatch({type:SELECTED_PRODUCT, payload:res.data});
}

// export const removeProduct=()=>{
//     return {
//         type:REMOVE_SELECTED_PRODUCT,
//     }
// }


export const removeProduct=()=>async(dispatch)=>{
    dispatch({type:REMOVE_SELECTED_PRODUCT});
}



