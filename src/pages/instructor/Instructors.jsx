import React from 'react';
import UseAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCart from './instructorCart';

const Instructors = () => {
    const [axiosSecure] = UseAxiosSecure();

    const {data : instructors =[], isLoading : loading} = useQuery({
        queryKey: ['instructors'],
        queryFn : async () => {
            const res = await axiosSecure.get('/students')
            return res.data;
        }
    })
    return (
        <div className='my-16'>
            <h1>instructor pages: {instructors.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
            {
                instructors.map(instructor => <InstructorCart
                key={instructor._id} instructor={instructor}>
                </InstructorCart>)
            }
            </div>
        </div>
    );
};

export default Instructors;