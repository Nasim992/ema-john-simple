
import React from 'react';
import './Product.css';
const Products = (props) => {

    return (
        <div>
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Products;