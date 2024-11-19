import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgatePassword";
import PrivateRoute from "../components/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: (() => fetch('/servicesData.json')),
            },
            {
                path: '/service/:id',
                element: <PrivateRoute>
                    <ServiceDetails />
                </PrivateRoute>,
                loader: (() => fetch('/servicesData.json')),
            },
            {
                path: '/my-profile',
                element: <PrivateRoute>
                    <MyProfile />
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/forget-password',
                element: <ForgetPassword />
            }
        ]
    }
])

export default routes;