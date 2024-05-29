/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;