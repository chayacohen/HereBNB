import React from "react";
import { Link } from "react-router-dom";


 class ProfileMenu extends React.Component {

    constructor(props) {
        super(props); 
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleModalClick = this.handleModalClick.bind(this); 
    }

    handleLogoutClick() {
        this.props.closeDropdown();
        this.props.logout();
    }

    handleModalClick() {
        this.props.closeDropdown()
        this.props.openModal('email')
    }

    render()
    {
        if (this.props.currentUser) {
            return (
                <div id="profile-menu-background" onClick={this.props.closeDropdown}>
                    <div id="profile-menu-container" onClick={e => e.stopPropagation()}>
                        <div id="profile-menu">
                            <button>Trips</button>
                            <button>Wishlist</button>
                            <button>Manage Listings</button>
                            <button><Link to={`/users/show/${this.props.currentUser.id}`} className="link" onClick={this.props.changeColor}>Account</Link></button>
                            <button onClick={this.handleLogoutClick}>Logout</button>
                        </div>
                    </div> 
                </div>
            )
        }
        else {
            return (
                <div id="profile-menu-background" onClick={this.props.closeDropdown}>
                    <div id="profile-menu-container" onClick={e => e.stopPropagation()}>
                        <div id="profile-menu">
                            <button id="login" value="Log In" onClick={this.handleModalClick}>Log In</button>
                            <button className="other_button" value="Sign Up" onClick={this.handleModalClick}>Sign Up</button>
                            <button className="other_button" value="Host your home">Host your home</button>
                            <button className="other_button" value="Resume">Resume</button>
                        </div>
                    </div>
                </div>
            )
        }

    };
}


export default ProfileMenu; 