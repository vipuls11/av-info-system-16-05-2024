import { FaRegGem } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { FaArrowsSpin } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

const contactsupportlist = [
    {
        id: 'contact 01',
        icon: <FaRegGem />,
        heading: 'Premium Quality Assurance',
        smallcontent: 'Top-notch quality guaranteed. Shop with confidence.'
    },
    {
        id: 'contact 02',
        icon: <FcCustomerSupport />,
        heading: 'Customer Support',
        smallcontent: 'Dedicated support for help whenever you need it.'
    },
    {
        id: 'contact 03',
        icon: <FaArrowsSpin />,
        heading: 'Environmental Responsibility',
        smallcontent: 'Commitment to eco-friendly practices. Choose sustainability.'
    },
    {
        id: 'contact 04',
        icon: <RiSecurePaymentLine />,
        heading: 'Secure Payment Options',
        smallcontent: 'Shop confidently with our secure payment methods.'
    }
]



export default contactsupportlist;
