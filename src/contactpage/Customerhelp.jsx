import React from 'react'
import { Link } from 'react-router-dom'

const Customerhelp = () => {
    return (
        <div>
            <h2 className="text-3xl font-[500]">Contact Information</h2>
            <p className='text-slate-600 mb-10 w-full md:w-3/4 lg:w-1/2 leading-relaxed'>Below, you'll find helpful information on how to reach us and answers to frequently asked questions.</p>
            <div className='bg-slate-50 py-10 sm:py-16 w-full lg:w-[90%] mx-auto rounded-[2rem] px-4 sm:px-8 border border-slate-100 shadow-sm'>
                <div className="overflow-x-auto">
                    <table className='w-full text-left min-w-[700px]'>
                        <tbody>
                            <tr className='border-b border-slate-200 hover:bg-white transition-colors'>
                                <th className='w-32 sm:w-40 py-6 font-semibold text-slate-900'>Address</th>
                                <td className='py-6 px-4 text-slate-700'>Level 1 to 4, 58/1, Margosa Road, 13th Cross, Malleshwaram, Bangalore-560003</td>
                                <td className='py-6 px-4 text-slate-700'>2nd Phase, 81/B, 2nd Cross Road APMC Yard, Yeswantpur Industrial Suburb, Yeswantpur, Bengaluru, Karnataka 560022</td>
                            </tr>
                            <tr className='border-b border-slate-200 hover:bg-white transition-colors'>
                                <th className='py-6 font-semibold text-slate-900'>Tollfree</th>
                                <td className='py-6 px-4'><Link to="tel:18002120895" className="text-primary-600 hover:text-primary-700 font-medium">18002120895</Link></td>
                                <td className='py-6 px-4 text-slate-400'>-</td>
                            </tr>
                            <tr className='border-b border-slate-200 hover:bg-white transition-colors'>
                                <th className='py-6 font-semibold text-slate-900'>Call Us</th>
                                <td className='py-6 px-4'><Link to="tel:+919849553149" className="text-primary-600 hover:text-primary-700 font-medium">+919849553149</Link></td>
                                <td className='py-6 px-4 text-slate-400'>-</td>
                            </tr>
                            <tr className='border-b border-slate-200 hover:bg-white transition-colors last:border-0'>
                                <th className='py-6 font-semibold text-slate-900'>Email Us</th>
                                <td className='py-6 px-4'><Link to="mailto:info@power-x.in" className="text-primary-600 hover:text-primary-700 font-medium">info@power-x.in</Link></td>
                                <td className='py-6 px-4'><Link to="mailto:bhagwan@power-x.in" className="text-primary-600 hover:text-primary-700 font-medium">bhagwan@power-x.in</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Customerhelp