import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../../public/vite.png'

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handlerLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => {
            console.log(error);
        })
    }

    const navbarContent = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/dashboard/'>Dashboard</NavLink></li>
        {
            user ? <div className='inline-flex  items-center'><div  className="tooltip  tooltip-bottom " data-tip={user?.displayName}><span><img className='h-14 w-14 rounded-full' src={user?.photoURL} alt="" /></span></div>
            <button onClick={handlerLogOut} className='btn btn-ghost -mt-1'>LogOut</button>
            </div>:
            <li><NavLink to="/login">Login</NavLink></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-gray-900 rounded-lg max-w-screen-xl	mx-auto text-white">
                <div className="navbar-start h-16 ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52">
                            {navbarContent}
                        </ul>
                    </div>
                    <a className="btn btn-ghost   font-bold  block"><img className='h-10 inline-flex' src={logo} alt="" /> <span className='text-xl'>Treaty Yoga</span> and <br /> <span className=' ml-8  pt-0'>Meditation Center</span></a>
                </div>
                <div className="na hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarContent}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;