import React from 'react';
import './tshirt.css'

const Tshirt = ({ tShirt, handleAddtoCart}) => {
    const {name,price,picture} =  tShirt
    return (
        <div className='T-shirt'>
          <img src={picture} alt="" />
          <h3>name: {name}</h3>
          <h5>price: {price}</h5>
            <button onClick={ ()=> handleAddtoCart(tShirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;