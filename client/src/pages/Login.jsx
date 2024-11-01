import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    const { storeTokenInLs } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login form", response);
            const res_data = await response.json();

            if (response.ok) {
                // alert("Login successfull");
                //stored the token in localhost ------------
                storeTokenInLs(res_data.token);
                // localStorage.setItem("token", res_data.token);
                setUser({ email: "", password: "" });
                toast.success("Login Successful...")
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("invalid credentials");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/contact.svg" alt="" width="500" height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Registration Form</h1>
                                <form onSubmit={handleSubmit}>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name='email' placeholder='Enter your email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name='password' placeholder='Enter your password' id='password' required autoComplete='off' value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type='submit' className='btn btn-submit'>Register Now</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

