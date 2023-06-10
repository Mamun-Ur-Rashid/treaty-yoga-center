import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const MySelectedClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = UseAxiosSecure();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses/${user?.email}`)
            return res.data;
        }
    })
    const handlerDelete = (id) => {
        
    }
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-6'>My Total Selected Classes: {selectedClasses.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((selectClass, index) => <tr key={selectClass._id}>
                                <td>{index + 1}</td>
                                <td>{selectClass.className}</td>
                                <td>{selectClass.instructorName}</td>
                                <th>${selectClass.price}</th>
                                <td>{selectClass.availableSeats}</td>
                                <th><button className='btn btn-sm'>pay</button></th>
                                <th><button onClick={ () => handlerDelete(selectClass._id)} className='btn btn-sm'>Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;