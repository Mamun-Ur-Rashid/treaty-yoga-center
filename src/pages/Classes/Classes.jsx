import React from 'react';
import useClasses from '../../Hooks/useClasses';
import ClassCard from '../classCard/ClassCard';
import UseAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [axiosSecure] = UseAxiosSecure();

    const {data: classes=[], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/classes/approve');
            return res.data;
        }
    }) 
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Classes</title>
            </Helmet>
            <div className='grid grid-cols-3 gap-6'>
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