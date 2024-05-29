/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[450px] my-4 mb-16" style={{ backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;