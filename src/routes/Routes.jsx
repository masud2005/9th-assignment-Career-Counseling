import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";

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
                element: <ServiceDetails />,
                loader: (() => fetch('/servicesData.json')),
            },
            {
                path: '/my-profile',
                element: <MyProfile />
            }
        ]
    }
])

export default routes;