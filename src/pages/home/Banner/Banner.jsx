
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Banner/index.css";
import { EffectFade, Navigation, Pagination } from "swiper";

const Banner = () => {
  return (
    <div className="object-cover w-full h-[450px]">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content relative">
            <img src="https://i.ibb.co/zN6n4hy/bb66.jpg" />
            <div className="absolute text-center text-white">
            <h3 className="sm:text-lg md:text-4xl font-bold">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4 overflow-hidden">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content relative">
            <img src="https://i.ibb.co/30sM3zm/bann1231.jpg" />
            <div className="absolute text-center text-white">
            <h3 className=" sm:text-lg md:text-4xl font-bold">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4 overflow-hidden">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content relative">
            <img src="https://i.ibb.co/M9RNmMj/bb2.jpg" />
            <div className="absolute text-center text-white">
            <h3 className="sm:text-lg md:text-4xl font-bold">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4 overflow-hidden">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content relative">
            <img src="https://i.ibb.co/vQwsWNT/bann1245.jpg" />
            <div className="absolute text-center text-white">
            <h3 className="sm:text-lg md:text-4xl font-bold">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4 overflow-hidden">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content relative">
            <img src="https://i.ibb.co/P66xgzj/bb5.jpg" />
            <div className="absolute text-center text-white">
            <h3 className="sm:text-lg md:text-4xl font-bold overflow-hidden">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content relative z-10 opacity-60">
            <img src="https://i.ibb.co/VSnqP0r/bb69.webp" />
            <div className="absolute text-center text-white ">
            <h3 className="sm:text-lg md:text-4xl font-bold">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4 overflow-hidden">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content relative">
            <img src="https://i.ibb.co/3Mt095b/banner4.jpg" />
            <div className="absolute text-center">
            <h3 className="sm:text-lg md:text-4xl font-bold">Treaty Yoga & Meditation Center</h3>
            <p className="text center sm:mx-6 md:mx-52 mt-4 overflow-hidden">Discover the transformative power of yoga and meditation, cultivating serenity, strength, and mindfulness. Embrace a journey of self-discovery, deep relaxation, and holistic well-being. Enhance physical vitality, mental clarity, and emotional balance. Experience tranquility, harmony, and inner peace through yoga and meditation practices</p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
