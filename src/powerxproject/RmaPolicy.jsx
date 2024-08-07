import React from 'react';
import ContactSupport from './ContactSupport';
import { CustomerAccordion } from '../contactpage/CustomerAccordion';

const RmaPolicy = () => {
    const list = [
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        },
        {
            listitem: 'Network of branches across India'
        }
    ]

    return (
        <div className='w-[95%] m-auto py-10'>
            <div className=''>
                <h2 className="text-4xl font-semibold mb-10">RMA Guidelines</h2>
                <p className='lg:md:w-[70%] text-lg font-normal leading-7 mb-10'>Welcome to Power X! As a valued customer, it's essential to understand our Return Merchandise Authorization (RMA) guidelines to ensure a seamless experience with our products. Our RMA policy outlines the procedures for returning and replacing products, protecting both your investment and our commitment to quality service. Below, we delve into the seven essential RMA guidelines for Power X products, covering everything from warranty coverage to logistics procedures.</p>
            </div>
            <div className=''>
                <ol className="list-decimal list-inside leading-9 text-lg font-semibold">
                    <li>
                        Warranty Coverage
                        <p className='text-md font-normal'>At Power X, we stand behind the quality of our products. However, it's crucial to note that our warranty does not cover certain types of damage, including:</p>
                        <ul className="list-disc list-inside text-md font-normal">
                            <li>Damage resulting from dust, fire, water, or any act of nature.</li>
                            <li>Mishandling, including pin bends, scratches, or patches.</li>
                            <li>Usage contrary to the operations specified in the user manual.</li>
                            <li>Mutilation or alteration of the product's serial number or warranty sticker.</li>
                        </ul>
                    </li>
                    <li> Warranty Period
                        <p className='text-md font-normal'>The warranty coverage for Power X products is determined by the period mentioned in your Tax Invoice. We ensure transparent communication regarding warranty duration to provide clarity and confidence in your purchase.</p>
                    </li>
                    <li>Credit Note Issuance
                        <p className='text-md font-normal'>In instances where we cannot cover the warranty, we issue a Credit Note based on the market rate or purchase rate, whichever is lower. This demonstrates our commitment to fair and equitable resolutions for our customers.</p>
                    </li>
                    <li> Logistics and Handling Charges
                        <p className='text-md font-normal'>While we strive to provide exceptional service, it's important to note that logistics and handling charges are solely borne by the customer. We appreciate your understanding and cooperation in this matter.</p>
                    </li>
                    <li>Data Loss and Recovery Settings
                        <p className='text-md font-normal'>Power X products are designed with advanced technology and functionality. However, we cannot be held responsible for data loss or recovery settings. We recommend backing up your data regularly to mitigate any potential risks.</p>
                    </li>
                    <li>Proof of Purchase Requirement
                        <p className='text-md font-normal'>When submitting an RMA request, customers must present proof of purchase, such as a valid Tax Invoice. This helps us verify the authenticity of the transaction and expedite the resolution process efficiently.</p>
                    </li>
                    <li>Service Centers Availability
                        <p className='text-md font-normal'>We have established service centers in Bengaluru, Hyderabad, Pune, Mumbai, and Vashi (New Mumbai) to provide convenient support and assistance to our customers. Our dedicated team is committed to addressing your queries and concerns promptly.</p>
                    </li>
                </ol>
            </div>
            <div>
                <div className="bg-[#DFFFFD] py-10  text-[#010B13] my-10 rounded-xl ">
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
            </div>
            <div className="">
                <CustomerAccordion />
            </div>
            <div className=" mt-5">
                <ContactSupport />
            </div>
        </div>
    )
}

export default RmaPolicy