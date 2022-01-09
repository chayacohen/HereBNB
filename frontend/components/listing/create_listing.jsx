import React from "react";
import { Link } from "react-router-dom";


class CreateListing extends React.Component {

    constructor(props) {
        super(props); 
        this.handleLogoClick = this.handleLogoClick.bind(this)
    }

    handleLogoClick() {
        this.props.history.push("/");
    }
    
    render()  {
        debugger 
        return (  
        <div>
            <div className="create-listing">
                <div className="question">
                    <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                    <p className="the-question">Which kind of place will you host?</p>
                </div>
                <div className="question-options">
                    <div className="options">
                        <div>
                            <p>Apartment</p> 
                                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80"/> 
                        </div>
                        <div>
                            <p>House</p>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80"/>
                        </div>
                        <div>
                            <p>Secondary unit</p>
                                <img src="https://images.unsplash.com/photo-1569436762389-0c0f8c379144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
                        </div>
                        <div>
                            <p>Bed and Breakfast</p>
                                <img src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
                        </div>
                        <div>
                            <p>Unique Space</p>
                                <img src="https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"/>
                        </div>
                    </div>
                    <div className="listing-buttons">
                        <Link className="link" id="back-button" >Back</Link>
                        <Link className="link" id="next-button">Next</Link>
                    </div>
                </div>
            </div>
        </div>
        )


    }
}

export default CreateListing; 