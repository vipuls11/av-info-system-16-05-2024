import React, { useState } from "react";
// import styles from "./Userlogin.module.css";
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Userlogin = () => {
    // eslint-disable-next-line no-unused-vars
    const loginsign = {
        login: "Login",
        Signup: "Sign Up",
        btn_signup: "Sign Up",
        btn_login: "Login",
    };
    const [action, SetAction] = useState("login");




    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="text-slate-700 hover:text-primary-600 transition-colors text-xl p-2 rounded-full hover:bg-slate-100" onClick={handleClickOpen}>
                <i className="fa-solid fa-user"></i>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                PaperProps={{
                    style: {
                        borderRadius: '1.5rem',
                        padding: '2rem',
                        maxWidth: '450px',
                        width: '100%',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                }}
            >
                <div className="relative">
                    <button 
                        onClick={handleClose} 
                        className="absolute -top-2 -right-2 text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100"
                    >
                        <CloseIcon />
                    </button>
                    
                    <div className="text-center flex flex-col mt-4">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                            {action === "login" ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-slate-500 mb-8">
                            {action === "login" 
                                ? "Enter your details to access your account." 
                                : "Sign up to start shopping premium gear."}
                        </p>
                        
                        <div className="flex flex-col gap-4">
                            {action === "Sign Up" && (
                                <>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <input 
                                            type="text" 
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-slate-50 hover:bg-white text-slate-900" 
                                            placeholder="Full Name" 
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <input 
                                            type="tel" 
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-slate-50 hover:bg-white text-slate-900" 
                                            placeholder="Phone Number" 
                                        />
                                    </div>
                                </>
                            )}
                            
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <input 
                                    type="email" 
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-slate-50 hover:bg-white text-slate-900" 
                                    placeholder="Email Address" 
                                />
                            </div>
                            
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <input 
                                    type="password" 
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-slate-50 hover:bg-white text-slate-900" 
                                    placeholder="Password" 
                                />
                            </div>
                            
                            {action === "login" && (
                                <div className="text-right mt-1">
                                    <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">Forgot Password?</button>
                                </div>
                            )}

                            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                {action === "login" ? "Login" : "Sign Up"}
                            </button>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            {action === "login" ? (
                                <p className="text-slate-500 font-medium">
                                    Don't have an account? 
                                    <button 
                                        className="text-primary-600 font-bold hover:text-primary-700 transition-colors ml-1.5" 
                                        onClick={() => SetAction("Sign Up")}
                                    >
                                        Sign Up
                                    </button>
                                </p>
                            ) : (
                                <p className="text-slate-500 font-medium">
                                    Already have an account? 
                                    <button 
                                        className="text-primary-600 font-bold hover:text-primary-700 transition-colors ml-1.5" 
                                        onClick={() => SetAction("login")}
                                    >
                                        Login
                                    </button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default Userlogin;