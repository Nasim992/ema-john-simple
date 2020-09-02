
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Products = (props) => {

    console.log(props)
    const {name,img,seller,price,stock} = props.product;

    return (
        <div className ="product">
            <div className="product-image">
                <img src={img}/>
            </div>
            <div classNAme="product-details">
              <h4 className="product-name">{name}</h4> 
              <br></br>
              <p><small>by : {seller}</small></p>
            <p>Price : ${price}</p>
             <p><small>Only {stock} left in stock -order seller </small></p>
            <button className="main-button" onClick={()=>props.handleAddProducts(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;