import React from 'react';
import './SideDrawer.css'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props, children) => {

    const sidedrawer = (<CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <aside className="Sidebar" onClick={props.onClick}>
            {children}
        </aside>
    </CSSTransition>);

    return ReactDOM.createPortal(sidedrawer, document.getElementById("side-drawer"))
}


export default SideDrawer;

