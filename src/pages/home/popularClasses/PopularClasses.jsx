import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularClassesCart from './PopularClassesCart';

const PopularClasses = () => {
    const [axiosSecure] = UseAxiosSecure();

    const { data: popularClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/popularClasses');
            return res.data;
        }
    })
    return (
        <div className='my-16'>
            <h3 className='text-center text-4xl font-bold mt-8 mb-12'>Treaty Yoga Popular Classes</h3>
            <div className='grid grid-cols-3 gap-4'>
                {
                    popularClasses.map(popularClass => <PopularClassesCart
                    key={popularClass._id} popularClass={popularClass}></PopularClassesCart>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;