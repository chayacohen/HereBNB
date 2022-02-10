import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import SearchContainer from "../search/search_container";
import ProfileMenuContainer from "./profile_menu_container";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: false, color: "black"}
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this); 
        this.closeDropdown = this.closeDropdown.bind(this);
        this.changeColor = this.changeColor.bind(this); 
    }

    handleLogoutClick() {
        this.props.logout()
    }

    handleLogoClick() {
        this.props.history.push("/"); 
        this.setState({color: 'black'}) 
    }

    handleProfileClick() {
       this.setState({show: true})
    }

    closeDropdown() {
        this.setState({show: false})
    }

    componentDidMount() {
        if (this.props.location.pathname !== '/' ) {
            this.setState({color: 'white'})
        }
        else {
            this.setState({color: 'black'})
        }
        document.addEventListener('scroll', () => {
            if (window.scrollY > 1 && this.props.location.pathname === '/') {
                this.setState({color: 'white'})
            } else if (window.scrollY < 1 && this.props.location.pathname === '/') {
                this.setState({ color: 'black' }) 
            } else if (window.scrollY >= 0 && this.props.location.pathname !== '/') {
                this.setState({ color: 'white' })
            } else {
                this.setState({color: 'black'})
            }
            })
    }

    changeColor() {
        this.setState({color: 'white'})
    }
 
    componentDidUpdate(prevProps) {
        if ((this.props.location.pathname !== prevProps.location.pathname) && this.props.location.pathname !== "/") {
            const header = document.getElementById("nav-bar");
            if (header) {
                header.style.backgroundColor = "white"; 
                header.style.color = "red"; 
            } 
        }
    }

    render() {

        const splitPathname = this.props.location.pathname.split('/'); 
        // const noShow = ['/listings/create-listing', '/listings/create-listing/:type']
        let image = ''; 
        if(this.props.currentUser) {
            image = this.props.currentUser.photoUrl
        }
        else {
            image = "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
        }

        if (splitPathname[2] === 'create-listing') {
            return null 
        }
        if (splitPathname[1] === 'bookings') {
            return null 
        }
        if (splitPathname[3] === 'create-listing') {
            return null 
        }

            return (
                <div>
                    <nav id="nav-bar"  style={{backgroundColor: this.state.color}} className={this.state.color}>
                        <p className="logo" id={this.state.color} onClick={this.handleLogoClick}>herebnb</p>
                        <div>
                            {this.props.location.pathname === '/' || splitPathname[1] === 'map' ?  <SearchContainer/> : null } 
                        </div>
                        <div id="right-nav">
                            <section id="profile-button" onClick={this.handleProfileClick}>
                                <div className="dropdown-lines">
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <img src={image} id="profile-img"/>
                            </section>
                        </div>
                    </nav>
                    { this.state.show ? <ProfileMenuContainer closeDropdown={this.closeDropdown} changeColor={this.changeColor}/> : null}
                </div>
            )
    }
}

export default Header; 