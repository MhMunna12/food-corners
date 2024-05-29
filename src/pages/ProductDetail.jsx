/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const food = useLoaderData();
    const { name, price, image, recipe, category } = food;
    console.log(food);
    return (
        <div className=" w-[650px] mx-auto mt-8">
            <figure><img className='w-[650px] h-[700px]' src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="text-3xl">Price: {price}</h2>
                <h2 className="text-2xl">{category}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={'/'}>Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;