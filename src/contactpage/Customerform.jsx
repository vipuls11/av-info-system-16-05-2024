import React, { useState } from 'react'
import './Customerform.css'

const Customerform = () => {
    const [formData, setFormData] = useState({
        floating_first_name: '',
        floating_email: '',
        floating_company: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Dummy API test endpoint
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    floating_first_name: '',
                    floating_email: '',
                    floating_company: ''
                });
                
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="text-center lg:text-left">
                <h4 className='py-4 lg:py-10 text-lg font-[900] text-primary-600'>Feedback and Suggestions</h4>
                <h2 className='text-3xl lg:text-4xl font-[800] text-slate-900'>
                    Contact Us for Immediate Assistance
                </h2>
            </div>
            <div className="floating-label-wrapper bg-gray-200 py-12 rounded-3xl relative overflow-hidden">
                <form className="max-w-lg m-auto px-4 lg:px-0 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group border-2 border-gray-300 rounded-lg p-2 bg-white/50 backdrop-blur-sm">
                            <input type="text" name="floating_first_name" id="floating_first_name" value={formData.floating_first_name} onChange={handleChange} className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-none appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required disabled={isSubmitting} />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[2] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group border-2 border-gray-300 rounded-lg p-2 bg-white/50 backdrop-blur-sm">
                            <input type="email" name="floating_email" id="floating_email" value={formData.floating_email} onChange={handleChange} className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-none appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required disabled={isSubmitting} />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[2] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email address</label>
                        </div>
                    </div>
                    <div>
                        <div className="relative z-0 w-full mb-5 group border-2 border-gray-300 rounded-lg p-2 bg-white/50 backdrop-blur-sm">
                            <textarea name="floating_company" id="floating_company" value={formData.floating_company} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-none appearance-none focus:outline-none focus:ring-0 peer" rows="4" placeholder=" " required disabled={isSubmitting} />
                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[2] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Company (Ex. Google)</label>
                        </div>
                    </div>
                    
                    {submitStatus === 'success' && (
                        <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg font-medium shadow-sm flex items-center">
                            <i className="fa-solid fa-circle-check mr-2"></i> Message sent successfully! We'll be in touch soon.
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg font-medium shadow-sm flex items-center">
                            <i className="fa-solid fa-circle-exclamation mr-2"></i> Something went wrong. Please try again.
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className='bg-black text-white text-lg font-semibold px-10 py-4 rounded-xl mb-4 mt-2 hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center'
                    >
                        {isSubmitting ? (
                            <><i className="fa-solid fa-spinner fa-spin mr-3"></i> Sending...</>
                        ) : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Customerform