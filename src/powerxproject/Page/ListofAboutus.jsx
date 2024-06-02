import React from 'react';
import AboutList from '../../AboutList';

const ListofAboutus =()=>{
    const list = "Welcome to PowerX - The Technology People!";
    const listone = "About Us";
    const listtwo = "At PowerX, we're more than just a premium hardware brand. We are the pioneers of innovation, dedicated to delivering cutting-edge technology solutions since our inception in 2003. Based in Bengaluru, India, we have expanded our footprint nationwide, becoming synonymous with quality, reliability, and unmatched performance.";
    const listthree = "Our extensive range of products, including <span className='font-extrabolder'>Motherboards, SSDs, Monitors, ATX-Cabinets, RAMs, Graphic Cards, Keyboards, Mouse, Accessories,</span>   CPU Cooler Fans, Toners Cartridges, Speakers, SMD SMPS, Computer Peripherals and Laptop Accessories, is meticulously crafted to meet the evolving needs of our customers. From gaming enthusiasts to IT professionals, we cater to a diverse clientele, providing solutions that elevate computing experiences to new heights.";
    const listfour="But our commitment extends beyond products. <span>We believe in building lasting relationships with our clients, partners, and employees, fostering an environment of trust, transparency, and ethical conduct. Our success is not just measured by sales figures but by the satisfaction and trust instilled in every interaction.</span>";
    const listfive="At PowerX, innovation is at the heart of everything we do. We invest in research and development, constantly pushing the boundaries of technology to deliver solutions that empower our customers to achieve more. With a relentless focus on quality, cost-effectiveness, and operational efficiency, we strive to exceed expectations and set new industry standards.";
    const listsix="Join us on this journey of innovation and excellence. Experience the power of technology with <span class='font-extrabolder'>PowerX - The Technology People.</span>"
    return <AboutList list={list} listone={listone} listtwo={listtwo} listthree={listthree} listfour={listfour} listfive={listfive} listsix={listsix}/>
}
export default ListofAboutus;