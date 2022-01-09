import React from 'react';
import {Link} from 'react-router-dom'; 
import ProfileFormContainer from './profile_form_container';

class Account extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {clicked: false, errors: ''}; 
        this.changeClickedState = this.changeClickedState.bind(this);
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

    componentDidMount() {
        const user = this.props.requestUser(this.props.match.params.id)
        // if (!user) {
        //     this.setState({errors: 'Could not locate user!'})
        // }
        // debugger
    }

    componentDidUpdate() {
        // this.setState({errors: ""})
        if (!this.props.user) {
            this.props.requestUser(this.props.match.params.id)
        }
        // if (!this.props.user) {
        //     this.setState({errors: 'Could not locate user!'})
        // }
    }
    
    render () {
        if (!this.props.user) {
            return null 
        }
        return (
            <div className="account">
                <div className="account-sidebar">
                    <img src={this.props.user.photoUrl} />
                    {this.props.currentUser === this.props.user ? 
                    <p><Link to="/users/edit-photo" className="link">Update Photo</Link></p> : null }
                </div>
                <div className="profile">
                    <div className="profile-section-one">
                        {this.props.user.first_name ? 
                        <p>{`Hi, I'm ${this.props.user.first_name}`}</p> : 
                        <p>Hi!</p>}
                        <p>Joined in 2022</p>
                        {this.props.currentUser === this.props.user ? 
                        <p onClick={this.handleEditClick}>Edit profile</p> : null }
                        {this.state.clicked ? <ProfileFormContainer changeClickedState={this.changeClickedState}/> : null}
                        <p className="total-reviews">{'\u2605'} 0 reviews</p>
                        {this.props.currentUser === this.props.user ? 
                        <p className="reviews-by-you">Reviews by you</p> : null }
                    </div>
                </div>

            </div>
        )
    }
       
}

export default Account;