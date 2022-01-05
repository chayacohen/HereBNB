import React from 'react';

class Account extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {clicked: false}; 
        this.changeClickedState = this.changeClickedState.bind(this);
    }

    changeClickedState() {
        this.setState({clicked: true})
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
                    <p>Update photo</p>
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