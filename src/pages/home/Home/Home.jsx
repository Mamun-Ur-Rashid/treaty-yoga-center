import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PhotoGallery from '../Photo/PhotoGallery';
import PopularClasses from '../popularClasses/PopularClasses';
import PopularInstructor from '../popularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div className='my-16'>
            <Helmet>
                <title>Treaty Yoga | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <PhotoGallery></PhotoGallery>
           
        </div>
    );
};

export default Home;