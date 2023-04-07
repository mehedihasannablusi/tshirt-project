import React from 'react';
import {useLoaderData} from 'react-router-dom'

const Home = () => {
   const Tshirts = useLoaderData()

    return (
        <div>
            <h1>this is home page {Tshirts.length} </h1>
        </div>
    );
};

export default Home;