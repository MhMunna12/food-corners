/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUser, user, googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleSUbmit = async (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        await signInUser(email, password)

    };
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])
    const handleGoogleLogin = () => {
        googleLogin()
    }
    return (
        <div className="my-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSUbmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="btn bg-red-500 text-white"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                            <div className="form-control  mt-6">
                                <button onClick={handleGoogleLogin} className="font-bold btn btn-primary">Google Login</button>
                            </div>
                            <div className="mt-6">
                                <p>
                                    New here?{" "}
                                    <Link to="/register" className="text-red-500">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;