import React from 'react';
import ClassCard from '../classCard/ClassCard';
import UseAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [axiosSecure] = UseAxiosSecure();

    const {data: classes=[], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('https://treaty-yoga-center.vercel.app/classes/approve');
            return res.data;
        }
    }) 
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Classes</title>
            </Helmet>
            <h3 className='text-center text-4xl font-bold my-8'>Treaty Yoga and Meditation Center <br /> All Classes List</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    classes.map(singleClass => <ClassCard
                        key={singleClass._id} singleClass={singleClass}
                    >
                    </ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;