import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import ProfileMenuContainer from "./profile_menu_container";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: false}
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this); 
        this.closeDropdown = this.closeDropdown.bind(this)
    }


    handleLogoutClick() {
        this.props.logout()
    }

    handleLogoClick() {
        this.props.history.push("/")
    }

    handleProfileClick() {
       this.setState({show: true})
    }

    closeDropdown() {
        this.setState({show: false})
    }
 
    render() {
            return (
                <div>
                    <nav className="nav-bar">
                        <p id="logo" onClick={this.handleLogoClick}>herebnb</p>
                        <div id="right-nav">
                            <section id="profile-button" onClick={this.handleProfileClick}>
                                <div className="dropdown-lines">
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <img src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" id="profile-img"/>
                            </section>
                            {/* <Link to="/signup">Signup</Link> */}
                            {/* <Link to="/login">Login</Link> */}
                        </div>
                    </nav>
                    { this.state.show ? <ProfileMenuContainer closeDropdown={this.closeDropdown}/> : null}
                </div>
            )
    }
}

export default Header; 