import React from 'react';
import {Link} from 'react-router-dom'; 
import ProfileFormContainer from './profile_form_container';

class Account extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {clicked: false}; 
        this.changeClickedState = this.changeClickedState.bind(this);
        this.updatePhotoClick = this.updatePhotoClick.bind(this); 
        this.handleEditClick = this.handleEditClick.bind(this)
    }

    changeClickedState() {
        if (this.state.clicked === false ) {
            this.setState({clicked: true})
        } else {
            this.setState({ clicked: false })
        }
    }

    handleEditClick() {
        this.setState({clicked: true})
    }

    updatePhotoClick() {
        this.props.openModal('uploadPicture')
    }
    
    render () {
        return (
            <div className="account">
                <div className="account-sidebar">
                    <img src={this.props.currentUser.photoUrl} />
                    <p><Link to="/users/edit-photo" className="link">Update Photo</Link></p>
                </div>
                <div className="profile">
                    <div className="profile-section-one">
                        <p>{`Hi, I'm ${this.props.currentUser.first_name}`}</p>
                        <p>Joined in 2022</p>
                        <p onClick={this.handleEditClick}>Edit profile</p>
                        {this.state.clicked ? <ProfileFormContainer changeClickedState={this.changeClickedState}/> : null}
                        <p className="total-reviews">{'\u2605'} 0 reviews</p>
                        <p className="reviews-by-you">Reviews by you</p>
                    </div>
                </div>

            </div>
        )
    }
       
}

export default Account;