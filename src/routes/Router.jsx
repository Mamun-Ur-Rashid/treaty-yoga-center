import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home/Home";
import Instructors from "../pages/instructor/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import SelectedClasses from "../pages/Dashboard/userDashboard/SelectedClasses";
import ManageStudent from "../pages/Dashboard/ManageStudent/ManageStudent";

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
                element:<SelectedClasses></SelectedClasses>
            },
            {
                path:'manageStudent',
                element: <ManageStudent></ManageStudent>
            }
        ]
    }
])
export default router;