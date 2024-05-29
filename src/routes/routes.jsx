import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
// import Register from "../pages/Register";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./Private/PrivateRoute";
import ProductDetail from "../pages/ProductDetail";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:3000/foods')
            },
            {
                path: '/products/:id',
                element: <ProductDetail />,
                loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                )
            },
            {
                path: 'all-product',
                element: (
                    <PrivateRoute>
                        <AllProducts />
                    </PrivateRoute>
                )
            },
            {
                path: 'add-product',
                element: (
                    <PrivateRoute>
                        <AddProducts />
                    </PrivateRoute>
                )
            },
            {
                path: 'all-product/edit/:id',
                element: (
                    <PrivateRoute>
                        <EditProducts />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`)
            }
        ]
    }
]);