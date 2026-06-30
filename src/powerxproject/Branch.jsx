import React from 'react';
import './Branch.css'

import BranchList from './Page/BranchList';
import ContactSupport from './ContactSupport';


const Branch = (props) => {
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
        <div className='Branch'>
            <div className='w-full md:w-3/4 lg:w-3/5 my-8'>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Branches</h2>
                <p className="text-lg text-slate-600 leading-relaxed">Welcome to Prime Assetsource Pvt Ltd's network of branches across India! We are delighted to offer you our premium services at convenient locations in Karnataka, Maharashtra, and Telangana. Whether you're in Bengaluru, Pune, Mumbai, New Mumbai (Vashi), or Hyderabad, our dedicated teams are here to assist you with all your needs. Let's take a closer look at each of our branches and the services we provide.</p>
            </div>
            <div>
                {/* <BranchDataList /> */}
                <BranchList />
            </div>
            <div>
                <div className="bg-primary-50 py-10 text-primary-950 my-10 rounded-[2rem] overflow-hidden relative border border-primary-100 shadow-sm w-[95%] mx-auto">
                    <div className="flex whitespace-nowrap animate-marquee w-max">
                        {/* First instance of the list */}
                        <div className="flex items-center gap-12 pr-12">
                            {list.map((item, idx) => (
                                <div key={`first-${idx}`} className='text-3xl font-bold opacity-80 hover:opacity-100 transition-opacity cursor-default'>
                                    {item.listitem}
                                </div>
                            ))}
                        </div>
                        {/* Second instance for seamless looping */}
                        <div className="flex items-center gap-12 pr-12">
                            {list.map((item, idx) => (
                                <div key={`second-${idx}`} className='text-3xl font-bold opacity-80 hover:opacity-100 transition-opacity cursor-default'>
                                    {item.listitem}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-5">
                <ContactSupport />
            </div>
        </div>
    )
}

export default Branch;