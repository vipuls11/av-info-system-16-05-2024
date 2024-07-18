import React from 'react'

const CustomerSupport = () => {
    const CustomerSupport = {
        heading: "How Can We Assist You Today?",
        customersupport: "Customer Support!",
        content:
            "We're here to assist you with any inquiries or concerns you may have regarding our products and services. Our dedicated team is committed to providing you with exceptional support to ensure your experience with Power-X is seamless and satisfactory.",
    };
    return (
        <div>
            <div className="my-20">
                <h5 className='text-xl font-semibold'>{CustomerSupport.heading}</h5>
                <h2 className='text-4xl font-[500] my-10'>{CustomerSupport.customersupport}</h2>
                <p className=''>{CustomerSupport.content}</p>
            </div>
        </div>
    )
}

export default CustomerSupport