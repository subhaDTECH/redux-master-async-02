import React,{useEffect} from 'react'
import "./Home.css"
import Product from './Product'
import {setProducts} from "../redux/actions/productAction"
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"

const Home = () => {
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.allproducts);
    console.log("home products",products);

//     const fetchProducts=async()=>{
//         const res=await axios
//         .get("https://fakestoreapi.com/products")
//         .catch((err) => {
//           console.log("Err: ", err);
//         });
//         dispatch(setProducts(res.data));
// }


     useEffect(()=>{
        //   fetchProducts();
        dispatch(setProducts());
         
    },[])
    return (
        <div className="home__container">
              <div className="home__banner__text">
                      <h4>Welcome to Ecommerce </h4>
                       <h1>Find Amazing Product Below</h1>
                        
              </div>

              <div className="product__container mx-auto mt-4">
                    <div className="container mt-5">
                       <div className="row mx-auto">

                       {
                        products.products.map((item)=>{
                          
                         return (
                            <Product key={item.id} item={item} /> 

                         )

                        })
                       }
                             
                              

                       </div>

                    </div>


              </div>
        </div>
    )
}

export default Home
