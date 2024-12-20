import React, { useState } from 'react';
import "./Login.css";
import assets from "../../assets/assets"
import { login, signup } from '../../config/firebase';

const Login = () => {

    const [currentState, setCurrentState] = useState("Login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAuthentication = (e) => {
        e.preventDefault();

        if (currentState === "Sign Up") {
            signup(username, email, password);
            console.log(username, email, password);
        } else {
            login(email, password)
        }
    }

    return (
        <div className='login'>
            <div className="logo">
                <img src={assets.logo_big} alt="" />
            </div>

            <div className="login-signUp-form">
                <h2>{currentState}</h2>
                <form>
                    {
                        currentState === "Sign Up" ? <input onChange={(e) => setUsername(e.target.value)}  type="text" placeholder='username' className="input-info" required /> : null
                    }

                    <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder='email' className="input-info" required />

                    <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='password' className="input-info" required />

                    {
                        currentState === "Sign Up" ? <div className="terms-conditions">
                            <input type="checkbox" name="" id="" required />
                            <p>Accept terms and conditions.</p>
                        </div> : null
                    }
                    
                    <button onClick={handleAuthentication} type='submit'>{currentState === "Sign Up" ? "Register" : "Login"}</button>
                </form>

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