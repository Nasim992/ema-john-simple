import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from './Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10); // take the first 10 products 
    const [products,setProducts] = useState(first10); // useState to initial 
    const [cart,setCart] = useState([])

    const handleAddProducts = (products)=> { // handle onclick event on the button 

        const newCart = [...cart,products]; // new cart

        setCart(newCart);

    }
    return (

        <div className = "shopContainer">
            <div class="productContainer">
                    {
                        products.map(pd=><Products product={pd} handleAddProducts = {handleAddProducts}></Products>)
                    }
            </div>
            <div className="shoppingCart">

                <Cart cart = {cart}></Cart>
            </div>
         
       
        </div>
    );
};

export default Shop;