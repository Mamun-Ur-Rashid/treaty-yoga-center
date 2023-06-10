import React from 'react';
import useAuth from './useAuth';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = UseAxiosSecure();

    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log("is instructor response", res);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;