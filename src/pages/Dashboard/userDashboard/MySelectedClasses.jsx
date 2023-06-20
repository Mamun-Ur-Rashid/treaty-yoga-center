import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import useClasses from '../../../Hooks/useClasses';

const MySelectedClasses = () => {
    const { user } = useAuth();
    // const [, refetch] = useClasses();
    const [axiosSecure] = UseAxiosSecure();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    const total = selectedClasses.reduce((sum, item) => item.price + sum, 0);
    const handlerDelete = (selectClass) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClasses/${selectClass._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Treaty Yoga | MySelected Classes</title>
            </Helmet>
            <h1 className='text-5xl text-center font-bold my-6'>My Total Selected Classes: {selectedClasses.length}  </h1>
            <h3 className='text-center text-3xl font-bold'>Total :$ {total} <Link to='/dashboard/payment'><button >Pay</button></Link></h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Image</th>
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
                                <td>{selectClass.image}</td>
                                <th>${selectClass.price}</th>
                                <td>{selectClass.availableSeats}</td>
                                <th><Link to={`/dashboard/payment/${selectClass._id}`}><button className='btn btn-sm bg-fuchsia-200'>pay</button></Link></th>
                                <th><button onClick={() => handlerDelete(selectClass)} className='btn btn-lg text-4xl  text-red-500'><FaTrashAlt></FaTrashAlt> </button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;