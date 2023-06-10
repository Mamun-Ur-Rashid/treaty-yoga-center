import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const MyClasses = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { user } = useAuth();

    const {data: myClasses = [], refetch } = useQuery({
        queryKey: ["myClasses"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myClasses/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
        
    })
    return (
        <div>
            <h3 className='text-5xl font-bold text-center my-8'>My Total Classes: {myClasses.length}</h3>
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
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Total Enrolled Students</th>
                                <th>FeedBack</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myClass, index) => <tr key={myClass._id}>
                                    <td>{index + 1}</td>
                                    <td>{myClass.className}</td>
                                    <td> <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myClass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{myClass.instructorName}</td>
                                    <td>{myClass.availableSeats}</td>
                                    <th>${myClass.price}</th>
                                    <th>{myClass.status}</th>
                                    <th>0</th>
                                    <th><button className='btn btn-sm'>Feedback</button></th>
                                    <th><button className='btn btn-sm'>Update</button></th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;