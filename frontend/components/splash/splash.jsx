import React from "react";
import Inspiration from './inspiration'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";



class Splash extends React.Component {

    componentDidMount() {
        const header = document.getElementById("nav-bar")
        header.style.backgroundColor = "black";
        header.style.color = "white";
    }


    render () {
        return (
            <div>
                <div id="splash-container">
                    <div id="splash-image-container">
                        <img src={window.airbnb_splash} id="splash-image" />
                    </div>
                    <p id="splash-text">Not sure where to go? Perfect.</p>
                    <button className="flexible-button">
                        <Link to="/listings" id="text">I'm flexible</Link>
                    </button>
                </div>
                <Inspiration/>
            </div>
            
        )
    }
}

export default Splash