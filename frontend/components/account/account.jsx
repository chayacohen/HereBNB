import React from 'react';
import {Link} from 'react-router-dom'

class Account extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {clicked: false}; 
        this.changeClickedState = this.changeClickedState.bind(this);
        this.updatePhotoClick = this.updatePhotoClick.bind(this); 
    }

    changeClickedState() {
        this.setState({clicked: true})
    }

    updatePhotoClick() {
        this.props.openModal('uploadPicture')
    }

    componentDidMount() {
        const header = document.getElementById('nav-bar')
        header.style.color = "white";
    }
    
    render () {
        return (
            <div className="account">
                <div className="account-sidebar">
                    <img src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" />
                    <p><Link to="/users/edit-photo" className="link">Update Photo</Link></p>
                </div>
                <div className="profile">
                    <div className="profile-section-one">
                        <p>{`Hi, I'm ${this.props.currentUser.first_name}`}</p>
                        <p>Joined in 2022</p>
                        <p onClick={this.changeClickedState}>Edit profile</p>
                        {/* {this.state.clicked ? <ProfileForm changeClickedState={this.changeClickedState}/> : null} */}
                        <p>{'\u2605'} 0 reviews</p>
                        <p>Reviews by you</p>
                    </div>
                </div>

            </div>
        )
    }
       
}

export default Account;