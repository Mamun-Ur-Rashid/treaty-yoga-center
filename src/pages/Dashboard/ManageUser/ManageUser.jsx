import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const ManageUser = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handlerMakeAdmin = (user) => {
       
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Successfully modified user to Admin",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handlerMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Successfully modified user to Instructor!",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='my-16 w-full bg-gray-500 p-5'>
            <Helmet>
                <title>Treaty Yoga | Manage User</title>
            </Helmet>
            <h3 className='text-center text-3xl'>Total users: {users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>role</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <th>{<button className='btn btn-neutral ' disabled={user.role === 'admin'} onClick={() => handlerMakeAdmin(user)} >Make Admin</button>}</th>
                                    <th>{<button className='btn btn-neutral' disabled={user.role === 'instructor'} onClick={() => handlerMakeInstructor(user)}>Make Instructor</button>}</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;