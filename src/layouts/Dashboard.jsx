import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {
    // TODO: fetch data to admin
    //  const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-neutral-300">
                    <label htmlFor="my-drawer-2" ></label>
                    <ul className=" menu p-5 w-80 h-full space-y-4">
                        <li><NavLink className='text-2xl mb-12   font-bold text-fuchsia-500' to='/'>Treaty Yoga and <br /> Meditation Center</NavLink></li>
                        {isAdmin ? (
                            <>
                                <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageStudent'>Manage Students</NavLink></li>
                                <li><NavLink to='/dashboard/payment'>Payment</NavLink></li>
                            </>
                        ) : isInstructor ? (
                            <>
                                <li><NavLink to='/dashboard/manageClasses'>Add Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageStudent'>My Classes</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to='/dashboard/selectedClasses'>Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/enrolled'>My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/payment'>Payment</NavLink></li>
                            </>
                        )}
                        

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;