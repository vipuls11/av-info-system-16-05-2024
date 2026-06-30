import React from "react";
// Removed import "./BranchList.css" because we are using Tailwind

const BranchList = () => {
  const BranchListitem = [
    {
      id: "01",
      branch_name: "Karnataka: Bengaluru Branch: Power-X Warehouse",
      head: "Power-X (Warehouse)",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "2nd Phase, 81/B, 2nd Cross Rd, APMC Yard, Yeswanthpur Industrial Suburb, Yeswanthpur, Bengaluru, Karnataka 560022",
      phone_no: "Ph No: +91 9849553149",
      button_person_name: "Mr.Bhagwan",
    },
    {
      id: "02",
      branch_name: "Maharashtra: Pune",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "Survey No.1547/A., G-7, Sadashiv Pet, Ramasharm Housing Society, Tilak Road, Pune - 411030",
      phone_no: "Ph No: 020-24324494",
      button_person_name: "Mr.Sourabh Mane",
    },
    {
      id: "03",
      branch_name: "Telangana: Hyderabad",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "Shop No 455 C Block 4th Floor, CTC Park Lane, S D Road, Secunderabad/Hyderabad - 500003",
      phone_no: "Ph No: 040-66904619",
      button_person_name: "Mr.Vibhor Kumar",
    },
    {
      id: "04",
      branch_name: "Maharashtra: Mumbai",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "No.21, 3rd Floor, Shanti Niketan Building, Near Vijay Chambers, Padamji Road, Mumbai - 400004",
      phone_no: "Ph No: 022-48817466",
      button_person_name: "Mr.Ganesh Badepure",
    },
    {
      id: "05",
      branch_name: "Maharashtra: New Mumbai",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "Vashi Plaza, Sector 17 Office No-510 'D' Wing 3rd Floor, Plot No. 80 & 81, Mumbai - 400703",
      phone_no: "Ph No: 022-46197466",
      button_person_name: "Mr.Ganesh Badepure",
    },
  ];

  const items = BranchListitem.map((list, index) => {
    const isFirst = index === 0;
    return (
      <li 
        key={list.id} 
        id={list.id} 
        className={`bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${isFirst ? "md:col-span-2 bg-slate-50 border-primary-100" : ""}`}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{list.branch_name}</h3>
        {list.head && <p className="text-primary-600 font-semibold mb-2">{list.head}</p>}
        <p className="font-semibold text-slate-700">{list.company_name}</p>
        <address className={`text-slate-500 not-italic my-4 leading-relaxed ${isFirst ? "md:w-3/5" : ""}`}>
          {list.address}
        </address>
        <p className="font-medium text-slate-800 mb-6 flex items-center">
          <i className="fa-solid fa-phone text-primary-500 mr-3"></i>
          {list.phone_no}
        </p>
        <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-md">
          {list.button_person_name}
        </button>
      </li>
    );
  });

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-medium">
      {items}
    </ul>
  );
};

export default BranchList;
