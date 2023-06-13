import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularInstructorCart from './PopularInstructorCart';



const PopularInstructor = () => {
    const [axiosSecure] = UseAxiosSecure();

    const { data: popularInstructors=[], isLoading: loading, refetch } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/popularInstructors');
            return res.data;
        }
    })
    return (
        <div className='my-16'>
            <h3 className='text-center text-4xl font-bold my-8'>Popular Instructors</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    popularInstructors.map(popularInstructor => <PopularInstructorCart key={popularInstructor._id}
                    popularInstructor={popularInstructor}></PopularInstructorCart> )
                }
            </div>
        </div>
    );
};

export default PopularInstructor;