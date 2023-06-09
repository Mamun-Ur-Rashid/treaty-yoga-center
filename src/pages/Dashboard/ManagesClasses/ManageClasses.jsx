import React from 'react';
import useClasses from '../../../Hooks/useClasses';

const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    return (
        <div>
            <h3 className='text-4xl text-center font-bold'>Total Classes: {classes.length}</h3>
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
                                <th>Status</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cls, index) => <tr key={cls._id}>
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
                                    <th><button className='btn btn-sm'>Approve</button></th>
                                    <th><button className='btn btn-sm'>Deny</button></th>
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