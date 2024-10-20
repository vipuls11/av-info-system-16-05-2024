import React, { useState } from "react";
import styles from "./Userlogin.module.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Userlogin = () => {
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
            <button className={styles.loginButton} onClick={handleClickOpen}>
                <i class="fa-solid fa-user"></i>
            </button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <List>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {/* <ListItemButton>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItemButton> */}
                    {/* <Divider /> */}
                    {/* <ListItemButton>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                        
                    </ListItemButton> */}
                    <div >
                        <div >
                            {/* <div className={styles.modalHeader}>
                                    <button className={styles.closeButton} onClick={onCloseModal}>
                                        &times;
                                    </button>
                                </div> */}
                            <div className={styles.modalBody}>
                                <div className={`LoginSignupCss text-center flex flex-col gap-5`}>
                                    <h2 className="LoginSignupCss2">{action}</h2>
                                    <div ClassName="my-5">
                                        {action === "login" ? (
                                            <div></div>
                                        ) : (
                                            <div className=" flex flex-col gap-5">
                                                <div className="User flex border border-black text-left px-3">
                                                    <span className=" ">
                                                        <i class="fa-solid fa-user"></i>
                                                    </span>
                                                    <input
                                                        type=""
                                                        name=""
                                                        value=""
                                                        className=" px-2 w-full outline-none ring:outline-none focus:outline-none"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div className="User flex border border-black text-left px-3">
                                                    <span className=" ">
                                                        <i class="fa-solid fa-user"></i>
                                                    </span>
                                                    <input
                                                        type=""
                                                        name=""
                                                        value=""
                                                        className=" px-2 w-full outline-none ring:outline-none focus:outline-none"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>


                                        )}
                                    </div>
                                    <div className="Email flex border border-black text-left px-3">
                                        <span>
                                            <i class="fa-solid fa-envelope"></i>
                                        </span>
                                        <input type="" name="" value="" className="px-2 w-full outline-none ring:outline-none focus:outline-none" placeholder="Email Id" />
                                    </div>
                                    <div className="Password flex border border-black text-left px-3">
                                        <span>
                                            <i class="fa-solid fa-lock"></i>
                                        </span>
                                        <input type="" name="" value="" className="px-2 w-full outline-none ring:outline-none focus:outline-none" placeholder="Password" />
                                    </div>
                                    {action === "Sign Up" ? (
                                        <div></div>
                                    ) : (
                                        <div>
                                            <p>Lost Password? Click here?</p>
                                            <button
                                                className={styles.gray}
                                                onClick={() => SetAction("login")}
                                            >
                                                {loginsign.login}
                                            </button>
                                            <p>For new Resigration <span onClick={() => SetAction("Sign Up")}>{loginsign.btn_signup}</span></p>
                                        </div>
                                    )}
                                    {action === "login" ? (
                                        <div></div>
                                    ) : (
                                        <div>
                                            <p>Already a Member? <span
                                                className=''
                                                onClick={() => SetAction("login")}
                                            >login</span></p>
                                            <button className={`${styles.gray} px-8 py-1`} onClick={() => SetAction("Sign Up")}>{loginsign.btn_signup}</button>
                                        </div>
                                    )}

                                </div>

                            </div>
                        </div>
                    </div>
                </List>
            </Dialog>
        </>
    );
};

export default Userlogin;