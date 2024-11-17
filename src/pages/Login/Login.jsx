import React, { useState } from 'react';
import "./Login.css";
import assets from "../../assets/assets"

const Login = () => {

    const [currentState, setCurrentState] = useState("Login");

    return (
        <div className='login'>
            <div className="logo">
                <img src={assets.logo_big} alt="" />
            </div>

            <div className="login-signUp-form">
                <h2>{currentState}</h2>
                <form>
                    {
                        currentState === "Sign Up" ? <input type="text" placeholder='username' className="input-info" required /> : null
                    }

                    <input type="email" placeholder='email' className="input-info" required />

                    <input type="password" placeholder='password' className="input-info" required />

                    <button type='submit'>{currentState === "Sign Up" ? "Register" : "Login"}</button>
                </form>
                {
                    currentState === "Sign Up" ? <div className="terms-conditions">
                        <input type="checkbox" name="" id="" />
                        <p>Accept terms and conditions.</p>
                    </div> : null
                }

                <div className="forgot-info">
                    {
                        currentState === "Login" ? <p>Forgot Password ? <span>Click Here</span> </p> : null
                    }

                    {
                        currentState === "Sign Up" ? <p>Already have an account ? <span onClick={() => setCurrentState("Login")}>Login</span></p> : <p>Do not have an account ? <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span></p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Login;