import React from 'react';
import Productlist from '../datalist/Productlist';

const Speakers = () => {
    console.log(Productlist, "RMAPOLICY")
    // console.log(props.monitor, "MONITOR PROP")

    const filterProductsByName = (name) => {
        return Productlist.filter(Product => Product.name === name);
    };

    const filteredMonitors = filterProductsByName("Speakers");

    if (filteredMonitors.length === 0) {
        return <div className='w-full lg:h-[500px] flex items-center justify-center text-4xl font-semibold'><h2 className="">No Data Present</h2></div>
    }
    return (
        <>
            <div className="w-[90%] m-auto my-5">
                <h2 className='text-center my-10 text-4xl py-5 font-bold'>SMD SMPS</h2>
                <div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">
                        {filteredMonitors.map(product => (
                            <div>
                                <div className="relative mb-5">
                                    <img src={product.img1} className="w-full h-full" />
                                    <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:opacity-100 hover:bg-white">
                                        <img src={product.img2} />
                                    </div>
                                    <span className="absolute top-2 left-2 text-white rounded-xl text-xs bg-red-600 px-2 py-0.5">
                                        {product.save}
                                    </span>
                                </div>
                                <div className="p-3">
                                    <h4 className="font-semibold">{product.title}</h4>
                                    <p className="text-lg text-red-600">{product.rupess}</p>
                                    <del className="text-gray-500 text-sm">{product.deleterupees}</del>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speakers