import React from 'react'
import Grouplist from './GroupBussinessList'

const GroupBussiness = (props) => {
    console.log(Grouplist, 'Group bussinexx')
    return (
        <div className="bg-[#E7E7E7] py-10">
            <div className="w-[90%] m-auto">
                <h5 className="font-semibold mb-8">Explore Our</h5>
                <h2 className="text-3xl my-2 font-medium mb-5">Group Business units</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 '>
                    {Grouplist.map(items => {
                        return <div className='p-1 bg-white overflow-hidden grid place-content-center'>
                            <div key={items.id} className='relative hover:scale-110 transition delay-150 duration-300 ease-in-out '>
                                <img src={items.image} alt={items.alt} />
                                <h4 className='absolute bottom-5 left-0 px-6 text-lg font-semibold'>{items.text}</h4>
                            </div>
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default GroupBussiness