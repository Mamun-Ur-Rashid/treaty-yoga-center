import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user} = useAuth();
    const [axiosSecure] = UseAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    return [cart, refetch];
};

export default useCart;