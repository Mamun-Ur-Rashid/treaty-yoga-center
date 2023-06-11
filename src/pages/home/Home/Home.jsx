import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;