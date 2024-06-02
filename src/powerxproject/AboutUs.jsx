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
            <div className="bg-[#DFFFFD] py-10  text-[#010B13] my-10 rounded-xl w-[90%] m-auto">
                <marquee behavior="" direction="" className=''>
                    <div className='flex '>
                        {
                            list.map(item => {
                                return <div className='text-2xl font-medium mx-1'>
                                    {item.listitem}
                                </div>
                            })
                        }
                    </div>
                </marquee>
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