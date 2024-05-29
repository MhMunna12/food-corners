/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleProductCardDashboard = ({ food, handleDeleteProduct }) => {
    const { id, name, category, image, recipe } = food;
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/foods/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                handleDeleteProduct(id)
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });
            })
    }
    return (
        <div className="mt-10 ">
            <div className="card  h-[500px]">
                <img className="" src={image} />
                <div className="card-body items-center text-center bg-base-200 text-black">
                    <h2 className="card-title">{name}</h2>

                    <p>{recipe}</p>
                    <div className='flex gap-2 justify-center'>
                        <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                            <Link to={`/products/${id}`} >Details</Link>
                        </button>
                        <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                            <Link to={`edit/${id}`} >Edit</Link>
                        </button>
                        <button onClick={handleDelete} style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleProductCardDashboard;