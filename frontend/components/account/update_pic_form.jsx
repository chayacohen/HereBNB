import React from "react";
import { Link } from "react-router-dom";

class UpdatePicForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {uploadedPic: null, updated: false} 
        this.handlePicChange = this.handlePicChange.bind(this);
    }

    handlePicChange(e) {
        this.setState({ uploadedPic: e.target.files[0]})
    }


    componentDidUpdate(prevProps, prevState) { 
        if (this.state.uploadedPic !== prevState.uploadedPic)  {
            const formData = new FormData(); 
            formData.append("user[photo]", this.state.uploadedPic); 
            $.ajax({
                url: `/api/users/${this.props.currentUser.id}`, 
                method: "PATCH", 
                data: formData, 
                contentType: false, 
                processData: false
            }).then(response => this.props.updateUser(response))
        }
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
                            <img src={this.props.currentUser.photoUrl} />
                        </div>
                        <div className="content">
                            <p>A profile photo that shows your face can help other hosts and guests get to know you. At herebnb we encourage you to upload a photo for a smoother interaction and experience! </p>
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