import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

class CreateListingPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = { location: '' }
        this.handleLogoClick = this.handleLogoClick.bind(this);
    }


    handleLogoClick() {
        this.props.history.push("/");
    }

    componentDidMount() {
    };


    render() {

        return (
            <div>
                <div className="location-type-listing">
                    <div className="question" id="location-question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-photo-question"><img src="https://images.unsplash.com/photo-1601134991665-a020399422e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxsb29raW5nJTIwYXQlMjBwaG9uZSUyMHRvZ2V0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/></p>
                    </div>
                    <div className="location-input">
                        <div className='attach-photos-container'>
                            <div className="attach-photos">
                                <div>
                                    <FontAwesomeIcon icon={faImages} id="images"/>
                                    <p className="upload-your">Upload your photos here</p>
                                    <p className="at-least">Add at least 5 photos</p>
                                </div>
                                <div>
                                    Upload from your device
                                </div>
                            </div>
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={`/listings/create-listing/floor-plan`}>Back</Link>
                            {this.state.location !== '' ?
                                <Link className="link" id="location-next-button" to={`/listings/create-listing/complete-form`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateListingPhotos;


