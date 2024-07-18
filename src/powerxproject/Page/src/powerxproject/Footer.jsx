import React from 'react';
import { Link } from "react-router-dom";
// import { FloatingLabel } from "flowbite-react";

const Footer=()=>{
        const Expolreproduct=[
            {lists:"MotherBoards"},
            {lists:"SSD's"},
            {lists:"LED Monintors"},
            {lists:"Cabinets"},
            {lists:"SMD SMPS"},
            {lists:"Grphic Card"},
            {lists:"Cable and Accessories"},
            {lists:"Speakers"},
            {lists:"RAM's"},
            {lists:"CPU Cooler Fans"},
            {lists:"Laptop Accessories"},
        ]
        const Bussinesspolicies  =[
                {
                    bussinesslist:"RMA Policy"
                },
                {
                    bussinesslist:"Privary Policy"
                },
                {
                    bussinesslist:"Shipping Policy"
                },
                {
                    bussinesslist:"Terms And Conditions"
                },
                {
                    bussinesslist:"Need help?"
                },
        ]
     return(
        <>
        <Link to="/footer">
        <div className='bg-white py-10'>
            <div className='w-[95%] m-auto grid lg:grid-cols-5 md:grid-cols-2 gap-5'>
                <div>
                    <ul className='leading-8 font-medium'>
                        <h3 className='font-semibold text-xl mb-5'>Explore Products</h3>
                        
                           {
                            Expolreproduct.map((item)=>{
                                console.log(item,"hello")
                                return(
                                    <>
                                    <li>{item.lists}</li>
                                    </>
                                )
                            })
                           } 
                   
                        {/* <li>
                            SSD's
                        </li>
                         <li>
                            LED Monintors
                        </li>
                        <li>
                            Cabinets
                        </li>
                        <li>
                            Keyboard and Mouse
                        </li>
                        <li>
                        SMD SMPS
                        </li>
                        <li>Grphic Card</li>
                        <li>Cable and Accessories</li>
                        <li>Speakers</li>
                        <li>
                            Toner
                        </li>
                        <li>Motherboards</li>
                        <li>RAM's</li>
                        <li>CPU Cooler Fans</li>
                        <li>Laptop Accessories</li> */}
                    </ul>
                </div>
                <div>
                    <ul className='leading-8 font-medium'>
                        <h3 className='font-semibold text-xl mb-5'>Business Policies</h3>
                        {
                            Bussinesspolicies.map((itemb)=>{
                            return(
                                <>
                                 <li>{itemb.bussinesslist}</li>
                                </>
                            )
                            })
                        }

                        {/* <li>RMA Policy</li>
                        <li>Privary Policy</li>
                        <li>Shipping Policy</li>
                        <li>
                            Terms And Conditions
                        </li>
                        <li>Need help?</li> */}
                    </ul>
                </div>
                <div className='col-span-2 '>
                    <h2 className='font-semibold text-4xl mb-5'>Subscribe to PowerX newsletter</h2>

                    <div className='flex items-center border border-black w-3/5 rounded-lg'>
                        {/* <div className="bg-white w-100">
                         <FloatingLabel
                         variant="filled"
                        label="Floating Helper"
                        helperText=""
                             />
                            </div> */}
                            <input className='w-full py-2 outline-none focus:ring-0 px-4 rounded-l-lg' placeholder='E-mail'/>
                        <span className='text-xl mx-2 text-gray-500'><i class="fa-regular fa-circle-right"></i></span>
                    </div>
                </div>
                <div>
                    <ul className='leading-8 font-medium' >
                        <h3 className='font-semibold text-xl mb-5'>Business Policies</h3>

                        <li className='text-lg font-semibold mb-5'>Power X</li>
                        <li className='text-lg font-semibold mb-5'>Prime AssetSource Private Limited</li>
                        <li className='mb-3'>58/1 Margosa Road, 13th Cross Rd Malleshwaram Bengaluru, Karnataka-560003</li>
                        <li>Tollfree: 1800 2100 895</li>
                        <li>Mail to: info@power-x.in</li>
                    </ul>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default Footer;