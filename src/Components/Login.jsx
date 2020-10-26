import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <div className="form_wrapper">
                    <div className="logo_area">
                        <NavLink to="/"><img src={require("../Assets/Images/logo.png").default} alt="Logo" /></NavLink>
                    </div>
                    <div className="form">
                        <div className="tab_menu">
                            <a href="#" className="active">Sign In</a>
                            <a href="#">Sign Up</a>
                        </div>
                        <form>
                            <div className="form_field">
                                <div className="form_group">
                                    <label htmlFor="email">Email / Mobile Number</label>
                                    <input type="text" name="user_login" />
                                    <p className="error_msg"> ** Email / Mobile Number field is required</p>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="email">Password</label>
                                    <input type="text" name="user_login" />
                                    <p className="error_msg"> ** Invalid Password</p>
                                </div>
                                <div className="form_group">
                                    <button type="submit" className="mkn_btn">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
