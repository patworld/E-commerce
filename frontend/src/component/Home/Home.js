import React, { Fragment } from "react";
import "./Home.css";
import Product from "./Product.js"


const product = {
    name: "cycle",
    images: [{url:"https://m.media-amazon.com/images/I/61NUQ+R5PnL._SX679_.jpg"}],
    price: "Rs.3000",
    _id:"sourav",
};

const Home = () => 
{
    return (
      <Fragment>
      <div className="banner">
            <p>Welcome to Hostel Buddy</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
          </div>
          <h2 className="homeHeading"> Featured Products</h2>

          <div className="container" id="container">

          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
           </div>
      </Fragment>
        
        
    );

};

export default Home;