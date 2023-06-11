import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './useAxiosSecure';

const useClass = () => {
    const {user, loading } = useAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { data : selectedClass =[], refetch} = useQuery({
        queryKey : ['selectedClasses',user?.email ],
        enabled: !loading,
        queryFn : async () => {
            const res = await axiosSecure.get(`/selectedClasses?email=${user?.email}`)
            console.log('res from axios', res);
            console.log(res.data)
            return res.data;
        }
    })
    return [selectedClass, refetch];
};

export default useClass;