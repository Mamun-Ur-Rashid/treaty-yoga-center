import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const {user } = useAuth();

    const { data : selectedClass =[], isLoading, refetch} = useQuery({
        queryKey : ['selectedClasses'],
        queryFn : async () => {
            const res = await fetch('http://localhost:5000/selectedClasses')
            return res.data;
        }
    })
    return [selectedClass, isLoading, refetch];
};

export default useClass;