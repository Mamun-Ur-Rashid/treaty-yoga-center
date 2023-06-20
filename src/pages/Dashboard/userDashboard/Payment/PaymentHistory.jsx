import React from 'react';
import UseAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { user } = useAuth();

    const { data: paymentHistory = [], refetch } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div className='bg-gray-500 p-5'>
            <h4 className='text-center text-4xl font-bold my-5'>Payment History</h4>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>price</th>
                                <th>Student Name</th>
                                <th>Transaction Id</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((singlePaymentHistory, index) => <tr
                                    key={singlePaymentHistory._id}>
                                    <th>{index + 1}</th>
                                    <th>{singlePaymentHistory.className}</th>
                                    <th>{singlePaymentHistory.instructorName}</th>
                                    <th>$ {singlePaymentHistory.price}</th>
                                    <th>{singlePaymentHistory.userName}</th>
                                    <th>{singlePaymentHistory.transactionId}</th>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
};

export default PaymentHistory;