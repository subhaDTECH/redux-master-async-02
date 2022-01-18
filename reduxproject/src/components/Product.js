import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"

const Product = (item) => {
    const {id,title,price,description,image}=item.item;
    return (
        <Link to={`/product/${id}`} className="card  card__Poduct g-4 gx-4 mx-auto text-center">
             <img src={image} alt="" className="img-fluid my-3 p-3" />
            <h5>{title}</h5>
            {/* <p>{description}</p> */}
         <p>🌟🌟</p>
         <p>Price : {price}</p>

     </Link>
       
    )
}

export default Product
