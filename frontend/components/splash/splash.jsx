import React from "react";
import { Redirect } from "react-router-dom";

export default function Splash() {
    return (
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
    )
}