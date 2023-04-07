import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../cart/Cart';
import './Home.css'

const Home = () => {
   const Tshirts = useLoaderData()
   const [cart ,setcart] = useState([])

   const handleAddtoCart = tshirt => {
    console.log(tshirt)
   const newcart = [...cart,tshirt]
    setcart(newcart)
   }

   const removecart = id =>{
    const remaining = cart.filter(ts => ts._id !== id)
    setcart(remaining)
    console.log(id)
   }

    return (
        <div className='Home-container'>
          <div className="T-shirt-container">
          {
                Tshirts.map(tShirt=><Tshirt
                
                    key={tShirt._id}
                    tShirt = {tShirt}
                    handleAddtoCart = {handleAddtoCart}
                
                
                ></Tshirt>)
            }
          </div>
          <div className="Cart-container">
           <Cart
           cart = {cart}
          
          removecart = {removecart}
           ></Cart>
          </div>
        </div>
    );
};

export default Home;