import React from 'react';
import UseAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularClassCart from './PopularClassCart';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


const PopularClasses = () => {
    const [axiosSecure] = UseAxiosSecure();

    const { data: popularClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('https://treaty-yoga-center.vercel.app/popularClasses');
            // console.log(res.data);
            return res.data;
        }
    })
    return (
        <div className='my-16'>
            <h3 className='text-center text-4xl font-bold mt-8 mb-12'><Fade bounce>
           <p> Treaty Yoga and Meditation Center</p></Fade> <br /> Popular Classes</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    popularClasses.map(popularClass => <PopularClassCart
                    key={popularClass._id} popularClass={popularClass}></PopularClassCart>)
                }
            </div>
            <div className='flex justify-center items-center my-8 border-2 p-6 sm:w-full md:w-1/2 mx-auto bg-fuchsia-100'>
               <Link to='/classes'> <button className='btn btn-outline p-4 mt-4 border-2 w-full '>Select Now</button></Link>
            </div>
        </div>
    );
};

export default PopularClasses;