import React from 'react';
import ListofAboutus from './Page/ListofAboutus';
import { LatestProduct, } from "../powerxproject/Bannerslider";
import ContactSupport from './ContactSupport';

const AboutUs = (props) => {
    const list = [
        {
            listitem: 'X - Cabinets,'
        },
        {
            listitem: 'RAMs,'
        },
        {
            listitem: 'Graphic Cards,'
        },
        {
            listitem: 'Mouse,'
        },
        {
            listitem: 'Accessories,'
        },
        {
            listitem: 'CPU Cooler Fans,'
        },
        {
            listitem: 'Toners Cartridges,'
        },
        {
            listitem: 'SMPS,'
        },
        {
            listitem: 'Computer Peripherals and Laptop Accessories.'
        }
    ]
    return <>
        <div>
            {/* <AboutList/> */}
            <ListofAboutus />
            <div className="bg-[#010B13] py-16 px-8 text-white rounded-xl w-[90%] m-auto">
                <h2 className="lg:text-5xl md:text-5xl text-4xl  font-extrabold">Explore Our Range</h2>
            </div>
            <div className="bg-primary-50 py-10 text-primary-950 my-10 rounded-[2rem] w-[90%] m-auto overflow-hidden relative border border-primary-100 shadow-sm">
                <div className="flex whitespace-nowrap animate-marquee w-max">
                    {/* First instance of the list */}
                    <div className="flex items-center gap-12 pr-12">
                        {list.map((item, idx) => (
                            <div key={`first-${idx}`} className='text-3xl font-bold opacity-80 hover:opacity-100 transition-opacity cursor-default'>
                                {item.listitem}
                            </div>
                        ))}
                    </div>
                    {/* Second instance for seamless looping */}
                    <div className="flex items-center gap-12 pr-12">
                        {list.map((item, idx) => (
                            <div key={`second-${idx}`} className='text-3xl font-bold opacity-80 hover:opacity-100 transition-opacity cursor-default'>
                                {item.listitem}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="">
                {
                    LatestProduct()
                }
            </div>

            <div className=" mt-5">
                <ContactSupport />
            </div>
        </div>
    </>
}

export default AboutUs;