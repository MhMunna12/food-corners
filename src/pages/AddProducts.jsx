/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const category = form.category.value;
        const price = form.price.value;
        const recipe = form.recipe.value;
        const image = form.image.value;
        const name = form.name.value;
        // console.log(id,brand,price,description,image_url);
        const data = { id, category, price, recipe, image, name }
        console.log(data);
        await fetch('http://localhost:3000/foods', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => console.log(data))
        form.reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Added Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mt-3'>Add Products</h1>
            <div className='p-4'>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='name' placeholder='Name' />
                    </div>
                    <div>
                        <input className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='category' placeholder='Category' />
                    </div>
                    <div>
                        <input className='bg-gray-100 p-4 w-full my-2 rounded' type='number' name='price' placeholder='Price' />
                    </div>
                    <div>
                        <input className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='recipe' placeholder='Recipe' />
                    </div>
                    <div>
                        <input className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='image' placeholder='Image_url' />
                    </div>
                    <div>
                        <input className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='id' placeholder='id' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className='btn mt-4 w-full p-3 text-white font-bold bg-red-400' type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;