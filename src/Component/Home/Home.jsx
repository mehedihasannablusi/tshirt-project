import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../cart/Cart';
import './Home.css'

const Home = () => {
   const Tshirts = useLoaderData()

    return (
        <div className='Home-container'>
          <div className="T-shirt-container">
          {
                Tshirts.map(tShirt=><Tshirt
                
                    key={tShirt._id}
                    tShirt = {tShirt}
                
                
                ></Tshirt>)
            }
          </div>
          <div className="Cart-container">
           <Cart></Cart>
          </div>
        </div>
    );
};

export default Home;