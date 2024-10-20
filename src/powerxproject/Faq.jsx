import React from 'react';
import './Faq.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

const Faq = () => {
    const image1 = "https://www.power-x.in/cdn/shop/files/Laptop_Battery.png?v=1708521322&width=500";
    const image2 = "https://www.power-x.in/cdn/shop/files/Laptop_Screen.png?v=1708521321&width=500";
    const image3 = "https://www.power-x.in/cdn/shop/files/Laptop_adapter.png?v=1708521321&width=500"
    return (<>
        <div className="Effect_Card lg:flex align-middle items-center lg:gap-20 overflow-hidden">
            <div className="lg:w-[40%] sm:grid sm:place-content-center">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={image1} alt="" className="h-full" /></SwiperSlide>
                    <SwiperSlide><img src={image2} alt="" className="h-full" /></SwiperSlide>
                    <SwiperSlide><img src={image3} alt="" className="h-full" /></SwiperSlide>
                    {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
            <div className="lg:w-[60%]">
                <h6 className='font-extrabold'>Explore</h6>
                <h2 className="text-3xl font-semibold my-8">High-Quality Laptop Screens</h2>
                <p>Dive into a world of visual excellence with our high-quality laptop screens. Crafted with precision and equipped with cutting-edge display technologies, these screens redefine clarity and vibrancy. Whether you're working on spreadsheets or streaming your favorite movies, our screens deliver an immersive experience like no other.</p>
                <button type="submit" className='bg-blue-400 text-white text-lg font-semibold px-10 py-4 rounded-xl mb-10 mt-5'>Buy Now</button>
            </div>
        </div>
    </>)
}

export default Faq;