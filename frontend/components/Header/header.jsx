import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handleLogoClick = this.handleLogoClick.bind(this)
    }

    handleLogoutClick() {
        this.props.logout()
    }

    handleLogoClick() {
        this.props.history.push("/")
    }
    render() {
        if (this.props.currentUser === undefined)
            return (
                <nav className="nav-bar">
                    <p id="logo" onClick={this.handleLogoClick}>herebnb</p>
                    <div id="right-nav">
                        <section id="profile-menu">
                            <div className="dropdown-lines">
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                            <img src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" id="profile-img"/>
                        </section>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
            )

        else return (
            <div>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )

    }
}

export default Header; 