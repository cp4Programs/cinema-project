import React from 'react'
import '../styles/users.css'
import { Link } from 'react-router-dom'

function Signin() {
    const handleSignIn = () => {

    }

    return (
        <div className="signup-container">
            <form className="signup-form">
                <div className="title-container">
                    <h1>Sign In</h1>
                    <p>Please fill in this form to sign in.</p>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email"> Email</label>
                    <input type="email" name="email" placeholder="Enter email" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name="password" placeholder="Enter password" required />
                </div>
                <div className="button-conatiner">
                    <button type="reset" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
                <p className="signin-message">Don't have an account?<Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Signin