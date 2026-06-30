import React from 'react'
import Slider from "react-slick";
function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const BannerImage = [
    {
      sliderimage: "/banner/banner_cabinet.webp",
      alt: "Cabinet",
      title: "Premium PC Cabinets",
      subtitle: "Build your dream setup with our high-airflow, stunning chassis designs.",
      buttonText: "Shop Cabinets"
    },
    {
      sliderimage: "/banner/banner_moniter.webp",
      alt: "Moniter",
      title: "Ultra-Clear Displays",
      subtitle: "Experience gaming and work in stunning high definition and vivid colors.",
      buttonText: "View Monitors"
    },
    {
      sliderimage: "/banner/banner_motherboard.webp",
      alt: "Motherboard",
      title: "Next-Gen Motherboards",
      subtitle: "The rock-solid foundation for ultimate computing performance.",
      buttonText: "Explore Motherboards"
    },
    {
      sliderimage: "/banner/banner_ram.webp",
      alt: "ram",
      title: "High-Speed Memory",
      subtitle: "Multitask like a pro with lightning-fast, ultra-reliable RAM.",
      buttonText: "Upgrade Now"
    }
  ];
  return (
    <div className="w-[95%] max-w-[1500px] m-auto mt-24 mb-20 relative group">
      {/* Decorative background blur behind the slider */}
      <div className="absolute inset-0 bg-primary-400 blur-[100px] opacity-20 rounded-full scale-90 -z-10"></div>
      
      <Slider
        {...settings}
        className="rounded-lg-[2.5rem] rounded-[1.5rem]  shadow-2xl shadow-slate-300/60 border border-slate-100 overflow-hidden bg-slate-900"
      >
        {BannerImage.map((item, idx) => (
          <div key={idx} className="outline-none relative overflow-hidden group/slide">
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent z-10 pointer-events-none"></div>
            
            <img
              src={item.sliderimage}
              alt={item.alt}
              className="w-full h-auto object-cover  transform transition-transform duration-[10000ms] ease-out scale-105 group-hover/slide:scale-110"
            />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-3/4 lg:w-3/5">
               <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
                 {item.title}
               </h1>
               <p className="text-lg md:text-2xl text-slate-300 mb-10 font-medium drop-shadow-md max-w-2xl leading-relaxed">
                 {item.subtitle}
               </p>
               <div>
                 <button className="bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 px-10 text-lg rounded-2xl shadow-xl shadow-primary-600/30 transition-all hover:-translate-y-1">
                   {item.buttonText}
                 </button>
               </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;