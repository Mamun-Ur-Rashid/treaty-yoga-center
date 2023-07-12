import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reViews, setReViews] = useState([]);

    useEffect(() => {
        fetch('https://treaty-yoga-center.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReViews(data);
            })
    }, [])
    return (
        <section className='my-12'>

            <div>
                <h3 className='text-center mt-32 text-5xl font-bold'>Testimonials</h3>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reViews.map(reView => <SwiperSlide key={reView._id}>
                            <div className='mx-24 my-8 space-y-4'>
                                <div className='flex justify-center items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reView.rating}
                                        readOnly
                                    />
                                </div>
                                <div className='flex justify-center text-center '><FaQuoteLeft className='text-center text-3xl'></FaQuoteLeft> </div>
                                <p className='text-center my-5'>{reView.description}</p>

                                <div className='flex  gap-4 w-1/2 mx-auto sm:justify-start md:justify-center items-center'>
                                    <h3 className='text-3xl text-yellow-500 font-semibold '>{reView.userName}</h3>
                                    <div>
                                        <img className='h-14 w-14  rounded-full' src={reView.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;