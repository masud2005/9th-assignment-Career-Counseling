import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/my-profile',
                element: <MyProfile />
            }
        ]
    }
])

export default routes;