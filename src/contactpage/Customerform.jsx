import React from 'react'
import './Customerform.css'

const Customerform = () => {

    return (
        <div className="grid grid-cols-2 mb-10">
            <div className="">
                <h4 className='py-10 text-lg font-[900]'>Feedback and Suggestions</h4>
                <h2 className='text-4xl font-[500]'>
                    Contact Us for Immediate Assistance
                </h2>
            </div>
            <div className="floating-label-wrapper bg-gray-200 py-12 rounded-3xl">
                <form className="max-w-lg m-auto">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group border-2 border-gray-300 rounded-lg p-2">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-none  appearance-none dark:text-white focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[2] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 peer-focus:dark:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group  border-2 border-gray-300 rounded-lg p-2">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-none appearance-none dark:text-white  focus:outline-none focus:ring-0  peer" placeholder=" " required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[2] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 peer-focus:dark:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email address</label>
                        </div>
                    </div>
                    <div class="">
                        <div class="relative z-0 w-full mb-5 group border-2 border-gray-300 rounded-lg p-2">
                            <textarea type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-none appearance-none dark:text-black  focus:outline-none focus:ring-0  peer" rows="4" placeholder=" " required />
                            <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[2] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 peer-focus:dark:text-gray-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Company (Ex. Google)</label>
                        </div>
                    </div>
                    <button type="submit" className='bg-black text-white text-lg font-semibold px-10 py-4 rounded-xl mb-10 mt-5'>Send Message</button>
                </form>

            </div>
        </div>

    )
}

export default Customerform