import React from 'react';
import './tshirt.css'

const Tshirt = ({ tShirt}) => {
    const {name,price,picture} =  tShirt
    return (
        <div className='T-shirt'>
          <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;