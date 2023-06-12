import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularInstructor = () => {
    const [axiosSecure] = UseAxiosSecure();

    const { data: popularInstructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/popularInstructors');
            return res.data;
        }
    })
    return (
        <div className='my-16'>
            <h3 className='text-center text-4xl font-bold my-8'>Popular Instructors</h3>
        </div>
    );
};

export default PopularInstructor;