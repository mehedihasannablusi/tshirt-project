import React from 'react';
import './cart.css'

const Cart = ({cart,removecart}) => {
    return (
        <div>
            <h1>This is cart container</h1> <br />
            <h2>total cart = {cart.length} </h2>
            
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() =>removecart(tshirt._id)} className='remove'>remove</button>
                     </p> )
            }
        </div>
    );
};

export default Cart;