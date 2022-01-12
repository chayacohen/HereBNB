import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

class CreateListingPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = { photos: [] }
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handlePicChange = this.handlePicChange.bind(this); 
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    handlePicChange(e) {
        const photos = this.state.photos
        const newPhotos = photos.concat(Object.values(e.target.files))
        this.setState({photos: newPhotos})
    }


    handleLogoClick() {
        this.props.history.push("/");
    }

    // componentDidUpdate(prevState) {
    //     if (this.state.photos !== prevState.photos) {
    //         const formData = new FormData();
    //         formData.append("user[photo]", this.state.uploadedPic);
    //         $.ajax({
    //             url: `/api/users/${this.props.currentUser.id}`,
    //             method: "PATCH",
    //             data: formData,
    //             contentType: false,
    //             processData: false
    //         }).then(response => this.props.updateUser(response))
    //     }
    // }


    handleNextClick() {
        this.props.receiveListingPhotos(this.state.photos)
    }

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
                                    <input style={{ display: 'none' }} type="file" multiple='multiple' onChange={this.handlePicChange} ref={pictureInput => this.pictureInput = pictureInput} />
                                    <button onClick={() => this.pictureInput.click()} className="upload-listing-photos">Upload from your device</button>
                                </div>
                            </div>
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={this.props.place ? `/listings/create-listing/floor-plan` : '/listings/create-listing'}>Back</Link>
                            {this.state.photos.length >= 5 ?
                                <Link className="link" id="location-next-button" onClick={this.handleNextClick} to={`/listings/create-listing/complete-listing`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateListingPhotos;


