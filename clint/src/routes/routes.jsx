import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import AddUser from '../pages/addUser'
import Home from '../pages/Home'
import AllUser from '../pages/AllUser'
import UpdateUser from '../pages/UpdateUser'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-user",
                element: <AddUser />
            },
            {
                path: "/all-users",
                element: <AllUser />
            },
            {
                path: "/update-user/:id",
                element: <UpdateUser />
            }
        ]
    },

])