import React from "react";
import { Link } from "react-router-dom";


class CreateListing extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {place_type: ''}
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this); 
    }

    handleLogoClick() {
        this.props.history.push("/");
    }

    handleClick(e) {
        this.setState({ place_type: e.currentTarget.firstChild.firstChild.data})
    }

    handleNextClick() {
        this.props.receivePlaceType(this.state.place_type.toLowerCase());
    }

    
    render()  {
        return (  
        <div>
            <div className="create-listing">
                <div className="question">
                    <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                    <p className="the-question">Which kind of place will you host?</p>
                </div>
                <div className="question-options">
                    <div className="options">
                        <div id={this.state.place_type === 'Apartment' ? 'place_type_clicked' : null } onClick={this.handleClick}>
                            <p>Apartment</p> 
                                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80"/> 
                        </div>
                        <div id={this.state.place_type === 'House' ? 'place_type_clicked' : null} onClick={this.handleClick}>
                            <p>House</p>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80"/>
                        </div>
                        <div id={this.state.place_type === 'Secondary unit' ? 'place_type_clicked' : null} onClick={this.handleClick}>
                            <p>Secondary unit</p>
                                <img src="https://images.unsplash.com/photo-1569436762389-0c0f8c379144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
                        </div>
                        <div id={this.state.place_type === 'Bed and breakfast' ? 'place_type_clicked' : null} onClick={this.handleClick}>
                            <p>Bed and breakfast</p>
                                <img src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
                        </div>
                        <div id={this.state.place_type === 'Unique space' ? 'place_type_clicked' : null} onClick={this.handleClick}>
                            <p>Unique space</p>
                                <img src="https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"/>
                        </div>
                    </div>
                    <div className="listing-buttons">
                        <Link className="link" id="back-button" to={`/users/${this.props.currentUser.id}/listings`}>Back</Link>
                        {this.state.place_type !== '' ? 
                        <Link className="link" id="next-button" onClick={this.handleNextClick} to={`/listings/create-listing/${this.state.place_type.split(' ').join('').toLowerCase()}`}>Next</Link> : null }
                    </div>
                </div>
            </div>
        </div>
        )


    }
}

export default CreateListing; 