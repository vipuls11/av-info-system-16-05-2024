import React from 'react'
import ContactSupportData from './ContactSupportdata';

const ContactSupport = () => {
    return (
        <div className=" w-[90%] m-auto">
            {
                <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-5 text-center'>
                    {ContactSupportData.map((item) => (
                        <div key={item.id}>
                            <i className={item.icon} />
                            <h4 className='text-lg font-semibold'>{item.heading}</h4>
                            <p className='my-5'>{item.smallcontent}</p>
                        </div>
                    ))}
                </div>

            }
        </div>
    )
}

export default ContactSupport;

