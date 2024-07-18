import React from 'react';
import './Branch.css'

import BranchList from './Page/BranchList';
import ContactSupport from './ContactSupport';


const Branch = (props) => {
    // console.log(props, "Branchdata")
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
            <div className='Branchsofcompany'>
                <h2 className="">Branches</h2>
                <p>Welcome to Prime Assetsource Pvt Ltd's network of branches across India! We are delighted to offer you our premium services at convenient locations in Karnataka, Maharashtra, and Telangana. Whether you're in Bengaluru, Pune, Mumbai, New Mumbai (Vashi), or Hyderabad, our dedicated teams are here to assist you with all your needs. Let's take a closer look at each of our branches and the services we provide.</p>
            </div>
            <div>
                {/* <BranchDataList /> */}
                <BranchList />
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
            <div className=" mt-5">
                <ContactSupport />
            </div>
        </div>
    )
}

export default Branch;