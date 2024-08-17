import React from 'react';
import './SideDrawer.css'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {

    console.log(props, "props", props.show)

    const sidedrawer = (<CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <aside className="Sidebar" onClick={props.onClick}>
            {props.children}
            {/* <Compo /> */}
        </aside>
    </CSSTransition>);

    return ReactDOM.createPortal(sidedrawer, document.getElementById("side-drawer"))
    // return <>{props.show ? children : null}</>
}


export default SideDrawer;

