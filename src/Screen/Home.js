import React from "react";
import Data from "../Data";
import 'react-multi-carousel/lib/styles.css'
import {Link} from 'react-router-dom'
import './Home.css'
import ProductScreen from "./ProductScreen";


function Home(props) {
    return (
     <div className="Home">


        <div className="Pro">
            Products
        </div>

                <ul className="products">
                    {
                        Data.product.map(product => 
                <li>
                    <div className="product">
                        <img className="product-image" src={product.Image} alt="product1" />
                    
                    <div className="product-name">
                        <Link to={/product/+product._id}>{product.name}</Link>
                        </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating} ({product.numberReview} reviews)</div>
                    </div>
                </li>
                    )
                }
                </ul>
            </div>

    );
}

export default Home