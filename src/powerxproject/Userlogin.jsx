import { useState } from "react";
import styles from "./Userlogin.module.css";

const Userlogin = () => {
    const [openModal, setOpenModal] = useState(false);
    const loginsign = {
        login: "Login",
        Signup: "Sign Up",
        btn_signup: "Sign Up",
        btn_login: "Login",
    };
    const [action, SetAction] = useState("login");
    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <button className={styles.loginButton} onClick={() => setOpenModal(true)}>
                <i class="fa-solid fa-user"></i>
            </button>
            {openModal && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <button className={styles.closeButton} onClick={onCloseModal}>
                                &times;
                            </button>
                        </div>
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
            )}
        </>
    );
};

export default Userlogin;