import React from 'react'
import BranchData from './BranchData'

const BranchDataList = (props) => {
    console.log(props, "cnxjvfdvudnj")
    return (
        <div>

            <ul>

                {
                    props.items.map((item) => (
                        <BranchData
                            id={item.id}
                            branchname={item.branch_name}
                            head={item.head}
                            companyname={item.company_name}
                            address={item.address}
                            phoneno={item.phone_no}
                            buttonpersonname={item.Branchdatabutton_person_name}
                        />
                    ))
                }
            </ul>

        </div>
    )
}

export default BranchDataList