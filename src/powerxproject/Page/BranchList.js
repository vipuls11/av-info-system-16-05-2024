import React from "react";
import "./BranchList.css";
// import BranchDataList from "./BranchDataList";

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
      //   head: "",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "Survey No.1547/A., G-7, Sadashiv Pet, Ramasharm Housing Society, Tilak Road, Pune - 411030",
      phone_no: "Ph No: 020-24324494",
      button_person_name: "Mr.Sourabh Mane",
    },
    {
      id: "03",
      branch_name: "Telangana: Hyderabad",
      //   head: "",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "Shop No 455 C Block 4th Floor, CTC Park Lane, S D Road, Secunderabad/Hyderabad - 500003",
      phone_no: "Ph No: 040-66904619",
      button_person_name: "Mr.Vibhor Kumar",
    },
    {
      id: "04",
      branch_name: "Maharashtra: Mumbai",
      //   head: "",
      company_name: "Prime Assetsource Pvt Ltd,",
      address:
        "No.21, 3rd Floor, Shanti Niketan Building, Near Vijay Chambers, Padamji Road, Mumbai - 400004",
      phone_no: "Ph No: 022-48817466",
      button_person_name: "Mr.Ganesh Badepure",
    },
    {
      id: "05",
      branch_name: "Maharashtra: New Mumbai",
      //   head: "",
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
      <li className="branchlist" key={list.id} id={list.id}>
        <h3 className="branchlist_name">{list.branch_name}</h3>
        <p className="branchlist_head">{list.head}</p>
        <p className="branchlist_company">{list.company_name}</p>
        <address
          className={`branchlist_address ${isFirst ? "first-address" : ""}`}
        >
          {list.address}
        </address>
        <p className="branchlist_phone_no">{list.phone_no}</p>
        <button className="branchlist_button">{list.button_person_name}</button>
      </li>
    );
  });

  return <ul className="branchs">{items}</ul>;
};

export default BranchList;
