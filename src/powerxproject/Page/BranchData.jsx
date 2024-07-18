import React from 'react'

const BranchData = (props) => {
    console.log(props, "datashow")
    return (
        <li className='' key={props.id} id={props.id}>
            <h3>{props.branchname}</h3>
            <p>{props.head}</p>
            <p>{props.companyname}</p>
            <address>{props.address}</address>
            <p>{props.phoneno}</p>
            <button>{props.buttonpersonname}</button>
        </li>
    )
}

export default BranchData;