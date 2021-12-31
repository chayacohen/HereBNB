import React from "react";
import { Link } from 'react-router-dom';


class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLogoutClick() {
        this.props.logout()
    }
    render() {
        if (this.props.currentUser === undefined)
            return (
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            )

        else return (
            <div>
                <h2>Welcome {this.props.currentUser.username}</h2>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )

    }
}

export default Greeting; 