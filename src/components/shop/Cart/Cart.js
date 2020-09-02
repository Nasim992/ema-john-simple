    import React from 'react';

    const Cart = (props) => {
    const cart  = props.cart;

    const total = cart.reduce((total,prd)=>total + prd.price,0); 

    /*   
    cart.reduce() --> do the same as the following things 
    const total = 0;

        for (i = 0 ;i<cart.length;i++) {
            const product = cart[i];
            total = total + product.price ;
        }  
    */
    let  shipping = 0;
    if (total>20) {
    shipping = 4.00
    }
    else if (shipping > 14) {
        shipping = 10.00
    }

    /*  formatting Number starts  */

    const formatNumber = number => {
        const precision = number.toFixed(2); // automatically convert to string 
        return Number(precision); //convert string to number 
    }
    
   /*  formatting Number ends   */

    const tax = total/10;
    const grandTotal = tax + total + shipping ; 

    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items Ordered : {cart.length} </p>
            <p>Total : ${formatNumber(total) }</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax+vat : {formatNumber(tax)}</p>
            <p>Grand Total :{formatNumber(grandTotal)}</p>
        </div>
    );
    };

export default Cart;