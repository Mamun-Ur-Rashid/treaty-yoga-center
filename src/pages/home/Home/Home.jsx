import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PhotoGallery from '../Photo/PhotoGallery';
import PopularClasses from '../popularClasses/PopularClasses';
import PopularInstructor from '../popularInstructor/PopularInstructor';
import Contact from '../Contact';

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
            <Contact></Contact>
           
        </div>
    );
};

export default Home;