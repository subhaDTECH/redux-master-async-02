import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './App.css';
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Product from "./components/Product.js"
import ErrorPage from "./components/ErrorPage.js"
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <>
         <Router>
        <Header/>
             <Routes>
                 <Route path="/" exact  element={<Home/>}  />
                 <Route path="/product/:id" exact  element={<ProductDetail/>}  />
                 <Route path="*" element={<ErrorPage/>}>
                   
                 </Route> 

             </Routes>
             <Footer/>
         </Router>

    </>
  );
}

export default App;
