/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProducts = () => {
    const food = useLoaderData();
    const [name, setName] = useState(food.name)
    const [price, setPrice] = useState(food.price)
    const [category, setCategory] = useState(food.category)
    const [id, setId] = useState(food.id)
    const [recipe, setRecipe] = useState(food.recipe)
    const [image, setImage] = useState(food.image)
    console.log(food);
    const handleSubmit = async (e) => {
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
        await fetch(`http://localhost:3000/foods/${food.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Update it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Updated!",
                            text: "Your file has been Updated.",
                            icon: "success"
                        });
                    }
                });
            })

    }
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mt-3'>Edit  Products</h1>
            <div className='p-4'>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input onChange={(e) => setName(e.target.value)} className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='name' placeholder='Name' value={name} />
                    </div>
                    <div>
                        <input onChange={(e) => setCategory(e.target.value)} className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='category' placeholder='Category' value={category} />
                    </div>
                    <div>
                        <input onChange={(e) => setPrice(e.target.value)} className='bg-gray-100 p-4 w-full my-2 rounded' type='number' name='price' placeholder='Price' value={price} />
                    </div>
                    <div>
                        <input onChange={(e) => setRecipe(e.target.value)} className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='recipe' placeholder='Recipe' value={recipe} />
                    </div>
                    <div>
                        <input onChange={(e) => setImage(e.target.value)} className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='image' value={image} placeholder='Image_url' />
                    </div>
                    <div>
                        <input onChange={(e) => setId(e.target.value)} className='bg-gray-100 p-4 w-full my-2 rounded' type='text' name='id' placeholder='id' value={id} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className='btn mt-4 w-full p-3 text-white font-bold bg-red-400' type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProducts;