import React, { Children } from 'react'

const Pra = (props) => {
    console.log(props, 'hello')
    return (
        <Pra1>
            <p>hello vipul vishwakarma</p>
        </Pra1>
    )
}

const Pra1 = ({ children }) => {

    return (
        <>
            <p>{children}</p>
        </>
    )
}

export default Pra

export { Pra1 }