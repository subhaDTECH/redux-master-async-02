import React from 'react'
import "./Header.css"

const Header = () => {
    return (
<div>
 

{/* ************************silder******************** */}

<div id="demo" className="carousel slide" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Los Angeles" className="crasoul_img"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Chicago" className="crasoul_img"  />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="New York" className="crasoul_img" />
    </div>
  </div>
  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

</div>
    )
}

export default Header
