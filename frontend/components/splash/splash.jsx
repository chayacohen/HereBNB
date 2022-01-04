import React from "react";
import { Redirect } from "react-router-dom";



class Splash extends React.Component {


    render () {
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
}

export default Splash