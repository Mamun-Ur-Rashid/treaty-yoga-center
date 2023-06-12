import React from 'react';
import { FaBars, FaDashcube, FaHome, FaList, FaRegCreditCard, FaRegListAlt, FaUserEdit, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
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
                <div className="drawer-side bg-neutral-300 w-full">
                    <label htmlFor="my-drawer-2" ></label>
                    <ul className=" menu p-5 w-80 h-full space-y-4">
                        <li><NavLink className='text-2xl mb-12   font-bold text-fuchsia-500' to='/'>Treaty Yoga and <br /> Meditation Center</NavLink></li>
                        {isAdmin ? (
                            <>
                                <li><NavLink to='/dashboard/manageClasses'><FaList></FaList> Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageUser'><FaUserEdit></FaUserEdit> Manage users</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li> 
                            </>
                        ) : isInstructor ? (
                            <>
                                <li><NavLink to='/dashboard/addAClass'><FaUtensils></FaUtensils> Add A Class</NavLink></li>
                                <li><NavLink to='/dashboard/myClasses'><FaRegListAlt></FaRegListAlt> My Classes</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to='/dashboard/selectedClasses'><FaRegListAlt></FaRegListAlt> My Selected Classes  
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </NavLink></li>
                                <li><NavLink to='/dashboard/myEnrolledClasses'><FaDashcube></FaDashcube> My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaRegCreditCard></FaRegCreditCard> Payment History</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                            </>
                        )}
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;