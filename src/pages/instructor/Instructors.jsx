import React from 'react';
import UseAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCart from './instructorCart';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [axiosSecure] = UseAxiosSecure();

    const {data : instructors =[]} = useQuery({
        queryKey: ['instructors'],
        queryFn : async () => {
            const res = await axiosSecure.get('/instructors')
            return res.data;
        }
    })
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Instructor</title>
            </Helmet>
            <h1 className='text-center text-3xl font-bold my-8'>Treaty Yoga and Meditation Center <br /> all Instructors : {instructors.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
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