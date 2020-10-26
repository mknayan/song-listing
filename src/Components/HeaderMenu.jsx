import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

class HeaderMenu extends Component {
    render() {
        return (
            <div className="left_menu col-md-4">
                <ul>
                    <li><NavLink to="/" exact> Home</NavLink></li>
                    <li><NavLink to="/mylist">My List</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(HeaderMenu)
