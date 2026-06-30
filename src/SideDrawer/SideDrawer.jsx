import React, { useRef } from 'react';
import './SideDrawer.css'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
    const nodeRef = useRef(null);

    const sidedrawer = (<CSSTransition nodeRef={nodeRef} in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <aside ref={nodeRef} className="Sidebar" onClick={props.onClick}>
            {props.children}
            {/* <Compo /> */}
        </aside>
    </CSSTransition>);

    return ReactDOM.createPortal(sidedrawer, document.getElementById("side-drawer"))
    // return <>{props.show ? children : null}</>
}


export default SideDrawer;

