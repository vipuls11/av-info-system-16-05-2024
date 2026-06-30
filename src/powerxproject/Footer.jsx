import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState(null);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        setSubscribeStatus('loading');
        try {
            // Dummy API call for subscription
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, type: 'newsletter_subscription' })
            });

            if (response.ok) {
                setSubscribeStatus('success');
                setEmail('');
                // Clear success message after 5 seconds
                setTimeout(() => setSubscribeStatus(null), 5000);
            } else {
                setSubscribeStatus('error');
            }
        } catch (error) {
            setSubscribeStatus('error');
        }
    };
    const Expolreproduct = [
        { lists: "Motherboards", links: "/motherboards" },
        { lists: "SSD's", links: "/ssd" },
        { lists: "LED Monitors", links: "/led-monitors" },
        { lists: "ATX Cabinets", links: "/atx-cabinets" },
        { lists: "SMD SMPS", links: "/smd-spms" },
        { lists: "Graphic Card", links: "/graphic-card" },
        { lists: "External Casing and WiFi", links: "/external-casing-wifi" },
        { lists: "Speakers", links: "/speaker" },
        { lists: "RAM's", links: "/ram" },
        { lists: "CPU Cooler Fans", links: "/cpu-cooler-fans" },
        { lists: "Laptop Accessories", links: "/latop-accessories" },
    ];
    
    const Bussinesspolicies = [
        { bussinesslist: "RMA Policy", links: "/rma-policy" },
        { bussinesslist: "Privacy Policy", links: "/privacy-policy" },
        { bussinesslist: "Shipping Policy", links: "/shipping-policy" },
        { bussinesslist: "Terms And Conditions", links: "/terms-conditions" },
        { bussinesslist: "Contact Us", links: "/contact-us" },
    ];

    return (
        <footer className='bg-slate-950 text-slate-300 py-16 border-t border-slate-800'>
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
                
                {/* Explore Products */}
                <div>
                    <h3 className='text-white font-semibold text-lg mb-6 tracking-wide uppercase text-xs'>Explore Products</h3>
                    <ul className='space-y-3 font-medium text-sm'>
                        {Expolreproduct.map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={item.links} 
                                    className={({ isActive }) => `transition-colors duration-200 block ${isActive ? 'text-primary-500 font-bold' : 'hover:text-primary-400'}`}
                                >
                                    {item.lists}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Business Policies */}
                <div>
                    <h3 className='text-white font-semibold text-lg mb-6 tracking-wide uppercase text-xs'>Business Policies</h3>
                    <ul className='space-y-3 font-medium text-sm'>
                        {Bussinesspolicies.map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={item.links} 
                                    className={({ isActive }) => `transition-colors duration-200 block ${isActive ? 'text-primary-500 font-bold' : 'hover:text-primary-400'}`}
                                >
                                    {item.bussinesslist}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className='lg:col-span-2'>
                    <h2 className='text-white font-bold text-3xl mb-4'>Subscribe to our newsletter</h2>
                    <p className='text-slate-400 mb-6 text-sm'>Get the latest updates on new products and upcoming sales.</p>
                    
                    <form onSubmit={handleSubscribe} className='flex items-center w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl overflow-hidden focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all duration-300'>
                        <input 
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={subscribeStatus === 'loading'}
                            className='w-full py-3 px-4 bg-transparent outline-none border-none text-white placeholder-slate-500 text-sm' 
                            placeholder='Enter your email address' 
                        />
                        <button 
                            type="submit" 
                            disabled={subscribeStatus === 'loading'}
                            className='px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors duration-300 disabled:bg-slate-600 flex items-center min-w-[120px] justify-center'
                        >
                            {subscribeStatus === 'loading' ? (
                                <i className="fa-solid fa-spinner fa-spin"></i>
                            ) : 'Subscribe'}
                        </button>
                    </form>
                    
                    {subscribeStatus === 'success' && (
                        <p className="mt-3 text-sm text-green-400 flex items-center">
                            <i className="fa-solid fa-circle-check mr-2"></i> Thank you for subscribing!
                        </p>
                    )}
                    {subscribeStatus === 'error' && (
                        <p className="mt-3 text-sm text-red-400 flex items-center">
                            <i className="fa-solid fa-circle-exclamation mr-2"></i> Failed to subscribe. Please try again.
                        </p>
                    )}
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className='text-white font-semibold text-lg mb-6 tracking-wide uppercase text-xs'>Contact Us</h3>
                    <ul className='space-y-4 text-sm font-medium'>
                        <li>
                            <strong className='block text-white mb-1'>Power X</strong>
                            Prime AssetSource Private Limited
                        </li>
                        <li className='text-slate-400 leading-relaxed'>
                            58/1 Margosa Road, 13th Cross Rd<br />
                            Malleshwaram Bengaluru,<br />
                            Karnataka-560003
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-phone text-primary-500"></i>
                            <span>1800 2100 895</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-envelope text-primary-500"></i>
                            <a href="mailto:info@power-x.in" className='hover:text-primary-400 transition-colors'>info@power-x.in</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Power X. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0 text-xl">
                    <i className="fa-brands fa-facebook hover:text-white cursor-pointer transition-colors"></i>
                    <i className="fa-brands fa-twitter hover:text-white cursor-pointer transition-colors"></i>
                    <i className="fa-brands fa-instagram hover:text-white cursor-pointer transition-colors"></i>
                    <i className="fa-brands fa-linkedin hover:text-white cursor-pointer transition-colors"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;