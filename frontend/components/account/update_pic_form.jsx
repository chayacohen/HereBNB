import React from "react";
import { Link } from "react-router-dom";

class UpdatePicForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {uploadedPic: null}
        this.handlePicChange = this.handlePicChange.bind(this);
    }

    handlePicChange(e) {
        this.setState({ uploadedPic: e.target.files})
    }

    render () {
        return (
            <div className="pic-form">
                <div className="directory">
                    <p><Link to={`/users/show/${this.props.currentUser.id}`} className="link">Profile</Link></p>
                    <p>{'>'}</p>
                    <p>Profile photos</p>
                </div>
                <h1>Profile Photos</h1>
                <div className='upload-container'>
                    <h3>Profile Photo</h3>
                    <div className="profile-content">
                        <div className="image-container">
                            <img src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" />
                        </div>
                        <div className="content">
                            <p>A profile photo that shows your face can help other hosts and guests get to know you. Airbnb requires all hosts to have a profile photo. We don't require guests to have a profile photo, but hosts can. If you're a guest, even if a host requires you to have a photo, they won't be able to see it until your booking is confirmed.</p>
                            <input style={{ display: 'none' }} type="file" onChange={this.handlePicChange} ref={pictureInput => this.pictureInput = pictureInput} />
                            <button onClick={() => this.pictureInput.click()} className="upload-button">Upload a file from your computer</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UpdatePicForm;