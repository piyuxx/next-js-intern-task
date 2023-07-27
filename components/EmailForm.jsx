"use client";
import React, { useState } from "react";
import RoundButton from "./RoundButton";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function EmailForm() {
    const [email, setEmail] = useState("");
    function handelChange(e) {
        setEmail(e.target.value);
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    async function handelSubmit() {
        if (!isValidEmail(email)) {
            toast.error("Email is not Valid", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            async function postEmailData() {
                const response = await fetch("https://xerocodee-task-api.onrender.com/form", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                });
                return response.json();
            }
            let resp = postEmailData();
            toast.promise(resp, {
                pending: "Sending Your Email",
                error: "Error occured 🤯",
            });
            toast.info((await resp).message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <>
            <ToastContainer />
            <input
                type="email"
                value={email}
                onChange={handelChange}
                placeholder="Your Email"
                className="email-input"
            />
            <div className="email-input-button" onClick={handelSubmit}>
                <RoundButton text={"Join Waitlist"} />
            </div>
        </>
    );
}

export default EmailForm;
