import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaDiceD20, FaUserAstronaut, FaUserShield } from 'react-icons/fa';

const MyEnrolledClasses = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { user } = useAuth();

    const { data: myEnrolledClasses = [], refetch } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            <h3 className='text-center text-3xl font-bold my-8'>My Total Enrolled Classes :{myEnrolledClasses.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Transaction Id</th>
                                <th>Email</th>
                                <th>price</th>
                                <th>Quantity</th>
                                <th>Class id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myEnrolledClasses.map((myEnrolledClass, index) => <tr
                                    key={myEnrolledClass._id}>
                                    <th>{index + 1}</th>
                                    <th>{myEnrolledClass.transactionId}</th>
                                    <th>{myEnrolledClass.email}</th>
                                    <th>$ {myEnrolledClass.price}</th>
                                    <th>{myEnrolledClass.quantity}</th>
                                    <th>{myEnrolledClass._id}</th>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};


export default MyEnrolledClasses;