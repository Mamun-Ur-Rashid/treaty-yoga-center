import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {

    const {data: classes=[], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://treaty-yoga-center.vercel.app/classes');
            return res.json();
        }
    }) 
    return [classes, loading, refetch]
};

export default useClasses;