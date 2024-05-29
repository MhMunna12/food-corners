/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div>
            <Banner />
            <Products foods={foods} />
        </div>
    );
};

export default Home;