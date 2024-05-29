/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold">
                <span>Hi, Welcome Back!</span>
            </h2>
            <div className="mx-auto mt-5 w-[300px] lg:w-[500px] bg-[#FFEDD5]">
                <div className='p-24 '>
                    <h2 className='flex items-center justify-center '>
                        {
                            <img src={user?.photoURL || "/public/placeholder.jpg"} />

                        }
                    </h2>
                    <h2 className='flex items-center justify-center uppercase text-xl'>
                        {
                            user?.displayName && user.displayName
                        }
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;