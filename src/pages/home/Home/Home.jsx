import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PhotoGallery from '../Photo/PhotoGallery';

const Home = () => {
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Home</title>
            </Helmet>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;