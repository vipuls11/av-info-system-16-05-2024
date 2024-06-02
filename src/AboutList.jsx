import React from 'react';

const AboutList=(props)=>{
        console.log(props, "vipul")
    return(
        <>
        {/* <div>
            <h5>{props.list}</h5>
        <h2>{props.listone}</h2>
        <p>{props.listtwo}</p>
        <p>{props.listthree}</p>
        <p>{props.listfour}</p>
        <p>{props.listfive}</p>
        <p>{props.listsix}</p>
        </div> */}
        <div className='w-[90%] m-auto my-10'>
            <h5 className='mb-10 text-lg'>Welcome to PowerX - The Technology People!</h5>
            <h2 className='text-3xl font-bold text-[#2095f3] mb-10'>About Us</h2>
            <p className='leading-8'>At PowerX, we're more than just a premium hardware brand. We are the pioneers of innovation, dedicated to delivering cutting-edge technology solutions since our inception in 2003. Based in Bengaluru, India, we have expanded our footprint nationwide, becoming synonymous with quality, reliability, and unmatched performance.</p>
            <p className='my-10 leading-8'>Our extensive range of products, including <span className="font-extrabold">Motherboards, SSDs, Monitors, ATX-Cabinets, RAMs, Graphic Cards, Keyboards, Mouse, Accessories, CPU Cooler Fans, Toners Cartridges, Speakers, SMD SMPS, Computer Peripherals and Laptop Accessories,</span>  is meticulously crafted to meet the evolving needs of our customers. From gaming enthusiasts to IT professionals, we cater to a diverse clientele, providing solutions that elevate computing experiences to new heights.</p>
            <p className='leading-8'> 
                But our commitment extends beyond products. <span className="font-extrabold">We believe in building lasting relationships with our clients, partners, and employees, fostering an environment of trust, transparency, and ethical conduct. Our success is not just measured by sales figures but by the satisfaction and trust instilled in every interaction.</span>
            </p>
            <p className='my-10 leading-8'>
                At PowerX, innovation is at the heart of everything we do. We invest in research and development, constantly pushing the boundaries of technology to deliver solutions that empower our customers to achieve more. With a relentless focus on quality, cost-effectiveness, and operational efficiency, we strive to exceed expectations and set new industry standards.
            </p>
            <p className='leading-8'>
                Join us on this journey of innovation and excellence. Experience the power of technology with <span className="font-extrabold">PowerX - The Technology People.</span>
            </p>
        </div>
        </>
    )
}

export default AboutList;