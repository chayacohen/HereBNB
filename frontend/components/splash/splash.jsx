import React from "react";
import Inspiration from './inspiration'
import { Redirect } from "react-router-dom";



class Splash extends React.Component {

    // componentDidMount() {
    //     const header = document.getElementById('nav-bar')
    //     if (window.scrollY < 1) {
    //         header.style.color = "black";
    //     }
    // }


    render () {
        return (
            <div>
                <div id="splash-container">
                    <div id="splash-image-container">
                        <img src={window.airbnb_splash} id="splash-image" />
                    </div>
                    <p id="splash-text">Not sure where to go? Perfect.</p>
                    <button className="flexible-button"
                    // onClick={<Redirect to="/listings"/>}
                    >
                        <p id='text'>I'm flexible</p>
                    </button>
                </div>
                <Inspiration/>
            </div>
            
        )
    }
}

export default Splash