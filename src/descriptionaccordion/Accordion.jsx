import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div>
            <div onClick={onToggle} className="flex justify-between py-5 my-5 text-lg border-y border-y-white font-extrabold">
                {title}
                <span>
                    {isOpen ? (
                        <i className="fa-solid fa-arrow-up"></i>
                    ) : (
                        <i className="fa-solid fa-arrow-down"></i>
                    )}
                </span>
            </div>
            {isOpen && <div style={{ padding: '10px', border: '1px solid #ccc' }} dangerouslySetInnerHTML={{ __html: content }} />
            }
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            title: 'Description',
            content: `
                <strong>Gentle Microfiber</strong> Cloth: Keep your screens looking pristine with our gentle microfiber cloth. 
                Crafted from soft and scratch-free material, this cloth ensures a safe and effective cleaning experience without 
                leaving any marks or scratches behind. Say goodbye to smudges and fingerprints as you effortlessly wipe away 
                dirt and debris, revealing a crystal-clear display every time.
                <br /><br />
                <strong>Effective Cleaning Spray</strong>: Our specially formulated cleaning spray is the perfect companion 
                to our microfiber cloth. Designed to tackle even the toughest grime, this powerful solution effectively removes 
                fingerprints, dust, and other debris that accumulate on your screens. With just a few sprays, you can restore 
                your devices to their original shine, enhancing visibility and clarity.
                <br /><br />
                <strong>Convenient Carrying Case</strong>: Take your screen cleaning routine on the go with our convenient 
                carrying case. Compact and portable, this case allows you to keep your cleaning essentials organized and easily 
                accessible wherever you are. Whether you're at home, in the office, or traveling, you can rely on our carrying 
                case to keep your screens clean and smudge-free at all times.
            `,
        },
        // { title: 'Item 2', content: 'Content for item 2' },
        // { title: 'Item 3', content: 'Content for item 3' },
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleItem(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;