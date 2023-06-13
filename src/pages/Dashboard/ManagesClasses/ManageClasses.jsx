import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageClasses = () => {
    const {user } = useAuth();
    const [axiosSecure] = UseAxiosSecure();
    const {data: manageClasses=[],  refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/classes');
            return res.data;
        }
    })

    const handleStatusApprove = (cls) => {
        fetch(`http://localhost:5000/classes/${cls._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-right',
                    icon: 'success',
                    title: 'Class status modified pending to approve!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handlerStatusDeny = (cls) => {
        fetch(`http://localhost:5000/class/${cls._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-right',
                    icon: 'success',
                    title: 'Class status modified pending to deny',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Manage Classes</title>
            </Helmet>
            <h3 className='text-4xl text-center font-bold'>Total Classes: {manageClasses.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Image</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageClasses.map((cls, index) => <tr key={cls._id}>
                                    <td>{index + 1}</td>
                                    <td>{cls.className}</td>
                                    <td> <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{cls.instructorName}</td>
                                    <td>{cls.email}</td>
                                    <td>{cls.availableSeats}</td>
                                    <th>{cls.price}</th>
                                    <th>{cls.status}</th>
                                    <th>{user.status === 'approve'? 'approve' : <button disabled={isApproveDisabled} onClick={ () => {handleStatusApprove(cls)}} className='btn btn-sm bg-fuchsia-400'>Approve</button>}</th>
                                    <th>{user.status === 'deny'? 'deny' : <button onClick={() => handlerStatusDeny(cls)} className='btn btn-sm bg-fuchsia-300'>Deny</button>}</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;