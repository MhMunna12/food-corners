/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleProduct from '../components/SingleProduct';
import SingleProductCardDashboard from '../components/dashboard/SingleProductCardDashboard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDeleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id))
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mt-3'>All Products</h1>
            <div className='grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto p-5'>
                {
                    products.map((food) =>
                        <SingleProductCardDashboard
                            key={food.id}
                            food={food}
                            handleDeleteProduct={handleDeleteProduct}
                        ></SingleProductCardDashboard>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;