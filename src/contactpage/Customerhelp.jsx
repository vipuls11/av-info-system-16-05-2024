import React from 'react'
import { Link } from 'react-router-dom'

const Customerhelp = () => {
    return (
        <div>
            <h2 className="text-3xl font-[500]">Contact Information</h2>
            <p className='my-10 w-[50%]'>Below, you'll find helpful information on how to reach us and answers to frequently asked questions.</p>
            <div className='bg-gray-200 py-20 w-[90%] m-auto rounded-3xl px-4'>
                <tbody className='px-2 mx-4'>
                    <table className=''>
                        <tr className='py-8  border-b border-black'>
                            <th className='w-40 py-8'>Address</th>
                            <td className='min-w-96 '>Level 1 to 4, 58/1, Margosa Road, 13th Cross, Malleshwaram, Bangalore-560003</td>
                            <td className='min-w-96'>2nd Phase, 81/B, 2nd Cross Road APMC Yard, Yeswantpur Industrial Suburb, Yeswantpur, Bengaluru, Karnataka 560022</td>
                        </tr>
                        <tr className='py-8 px-4 border-b border-black'>
                            <th className='py-8'>Tollfree</th>
                            <td><Link>18002120895</Link></td>
                            <td>-</td>
                        </tr>
                        <tr className='py-8 px-4 border-b border-black'>
                            <th className='py-8'>Call Us</th>
                            <td><Link>
                                +919849553149</Link></td>
                            <td>-</td>
                        </tr>
                        <tr className='py-8 px-4 border-b border-black last:border-0'>
                            <th className='py-8'>Email Us</th>
                            <td><Link>info@power-x.in</Link></td>
                            <td><Link>bhagwan@power-x.in</Link></td>
                        </tr>
                    </table>
                </tbody>
            </div>
        </div>
    )
}

export default Customerhelp