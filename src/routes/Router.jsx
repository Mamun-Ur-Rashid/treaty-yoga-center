import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home/Home";
import Instructors from "../pages/instructor/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import ManageClasses from "../pages/Dashboard/ManagesClasses/ManageClasses";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import MySelectedClasses from "../pages/Dashboard/userDashboard/MySelectedClasses";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/instructors',
                element:<PrivateRoute> <Instructors></Instructors></PrivateRoute>
            },
            {
                path:'/classes',
                element: <Classes></Classes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'selectedClasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path:'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path:'manageUser',
                element: <ManageUser></ManageUser>
            },
            {
                path:'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path:'myClasses',
                element: <MyClasses></MyClasses>
            }
        ]
    }
])
export default router;