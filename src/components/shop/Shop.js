import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    return (

        <div className = "shopContainer">
            <div class="productContainer">
                    {
                        products.map(pd=><Products product={pd}></Products>)
                    }
            </div>
            <div className="shoppingCart">

                <h1> This is Cart </h1>

            </div>
         
       
        </div>
    );
};

export default Shop;