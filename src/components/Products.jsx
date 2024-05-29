/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import SingleProduct from './SingleProduct';

const Products = ({ foods }) => {

    return (
        <div>
            <div className="mb-20">


                <div className="mt-10 grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {
                        foods.slice(1, 4).map(food => <SingleProduct
                            key={food.id}
                            food={food}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;