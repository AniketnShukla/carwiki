import React from 'react'
import './Sign.css'

function Sign() {
    return (
        <div className="Sign">
        <div className="Sign_Container">
            <div className="Sign_title">
            Sign In
            </div>
            <div className="Grid_input">
                <div className="Email_input">
                    <label>E-mail :</label>
                    <input type="Email" placeholder="Enter Email" />
                </div>
                <div className="Password_input">
                    <label>Password :</label>
                    <input type="Password" placeholder="Enter Password" />
                </div>
            </div>
            <p></p>

            <div className="Buttons">
                    <button>Sign In</button>
            </div>
            <div className="Create_new_account">
                <div>
                    New User
                </div>
                <div className="account_new" style={{color:"blueviolet"}}>
                    Create Account
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sign
