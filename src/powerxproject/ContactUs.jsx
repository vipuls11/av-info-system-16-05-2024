import React from 'react';
import CustomerSupport from '../contactpage/CustomerSupport';
import Customerhelp from '../contactpage/Customerhelp';
import { CustomerAccordion } from '../contactpage/CustomerAccordion';
import Customerform from '../contactpage/Customerform';
import ContactSupport from './ContactSupport';

const ContactUs = () => {
    return (
        <>
            <div className='w-[90%] m-auto'>
                <div className="">
                    <CustomerSupport />
                </div>
                <div className="">
                    <Customerhelp />
                </div>
                <div className="">
                    <CustomerAccordion />
                </div>
                <div className="">
                    <Customerform />
                </div>

                <div className=" mt-5">
                    <ContactSupport />
                </div>
            </div >
        </>
    )
}

export default ContactUs;