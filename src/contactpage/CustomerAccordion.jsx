import React, { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import './CustomerAccordion.css';

export const CustomerAccordion = () => {
    const data = [
        {
            Question: 'How can Power-X assist me with my product-related queries?',
            Answer: 'Power-X is dedicated to providing comprehensive assistance for all product-related inquiries. Whether you have questions about product features, troubleshooting, or warranty coverage, our knowledgeable support team is here to help. Simply reach out to us via phone, email, or our online chat platform for prompt assistance.'
        },
        {
            Question: 'What should I do if I encounter technical issues with my Power-X product?',
            Answer: "If you encounter technical issues with your Power-X product, our technical support team is available to assist you. Please contact us with detailed information about the issue you're experiencing, and our experts will work with you to troubleshoot and resolve the problem promptly."
        },
        {
            Question: 'Can Power-X help me with product returns or exchanges?',
            Answer: "Yes, Power-X offers a hassle-free return and exchange policy for eligible products. If you're not satisfied with your purchase or need to exchange it for any reason, please contact our customer support team to initiate the return process and discuss your options."
        },
        {
            Question: 'How do I track the status of my order?',
            Answer: "You can easily track the status of your order by logging into your Power-X account and navigating to the order tracking section. There, you'll find real- time updates on the status of your order, including shipping and delivery information."
        },
        {
            Question: 'Does Power-X provide assistance with product installation or setup?',
            Answer: "Yes, Power-X offers installation and setup assistance for select products. If you require assistance with product installation, please contact our support team, and we'll be happy to provide guidance or arrange for professional installation services if necessary."
        }
    ]
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
        console.log("Hello")
    }
    return (
        <div className="grid grid-cols-2 py-14">
            <div className="">
                <h2 className='text-4xl font-[500]'>FAQs</h2>
                <h4 className='py-10 text-lg font-[900]'>Common Issues and How to Resolve Them Quickly</h4>
                <div>
                    <p>Get Instant Solutions to Frequently Asked Questions</p>
                    <p className='text-gray-400'>Average answer time: 10:30am to 7:00pm</p>
                </div>

                <button className='bg-black text-white text-xl font-semibold px-10 py-4 rounded-xl my-10'>Call Now</button>
            </div>

            <div className='Wrapper bg-gray-200 rounded-3xl'>
                <div className="accordion">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className='item  '>
                                    <div className="title" onClick={() => toggle(i)}>
                                        <h2 className="" >{item.Question} </h2>
                                        <span>{selected == i ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</span>
                                    </div>
                                    <p className={selected == i ? 'content show' : 'content'}>{item.Answer}</p>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            </div>
        </div>
    )
}
