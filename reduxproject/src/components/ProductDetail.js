import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios';
import {useDispatch,useSelector} from "react-redux"
import {setProduct,removeProduct} from "../redux/actions/productAction"
import "./ProductDetail.css"
import LoadingPage from './LoadingPage';

const ProductDetail = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.allproducts.product)

//     const fetchProduct=async()=>{
//           const res=await axios.get("https://fakestoreapi.com/products/"+id)
//           .catch((E)=>{
//               console.log(E)
//           })
//           dispatch(setProduct(res.data));
// }

    useEffect(()=>{
        if(id){
           dispatch(setProduct(id));

        }
        return ()=>{
           dispatch(removeProduct());
        }
       

    },[id])

     if(Object.keys(product).length==0){
         return (
             <LoadingPage/>
         )
     }


    return (
        <div className="container product__container my-5">
        <div className="row text-center mt-5 mx-auto">
           <div className="col-md-6 mt-5 p-5 left_side_box">

           {/* ******************************* */}
           {/* carosult part */}
 <div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
  <img src={product.image} alt="not found" className="d-block product_img" />
  </div>
  <div className="carousel-item">
  <img src={product.image} alt="not found" className="d-block img-fluid product_img" />
  </div>
  <div className="carousel-item">
  <img src={product.image} alt="not found" className="d-block img-fluid product_img " />
  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

 

           {/* //end */}








            {/* <img src={product.image} alt="not found" className="img-fluid product_img" /> */}
          </div>
          <div className="col-md-6  mt-5 p-5 right_side_box">
              <h3 className="p-4 ">{product.title}</h3>
               <p>{product.description}</p>
               <p className="p-4"> price : {product.price}</p>
               <button className="btn btn-warning">Add to cart</button>

          </div>

        </div>
            
        </div>
    )
}

export default ProductDetail
