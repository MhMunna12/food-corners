/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ food }) => {
    const { id, name, category, image, recipe } = food;
    return (
        <div className="card  ">
            <img className="" src={image} style={{ height: '300px', }} />
            <div className="card-body items-center text-center bg-base-200 text-black">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                    <Link to={`/products/${id}`} >See Details</Link>
                </button>

            </div>
        </div>
    );
};

export default SingleProduct;