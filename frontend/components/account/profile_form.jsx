import React from 'react'; 

class ProfileForm extends React.Component {

    constructor(props) {
        super(props) 
        let aboutString = ""; 
        if (this.props.currentUser.about) {
            aboutString = this.props.currentUser.about
        }
        let locationString = ""; 
        if (this.props.currentUser.location) {
            locationString = this.props.currentUser.location
        }
        let workString = ""; 
        if (this.props.currentUser.work) {
            workString = this.props.currentUser.work
        }
        this.state = { about: aboutString, location: locationString, work: workString, focusAbout: false, focusLocation: false, focusWork: false}; 
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 
        this.handleCancelClick = this.handleCancelClick.bind(this); 
        this.handleSaveClick = this.handleSaveClick.bind(this); 
    }

    handleInput(field) {
        return e => 
            this.setState({[field]: e.currentTarget.value})
    }

    handleCancelClick () {
        this.props.changeClickedState()
    }

    handleSaveClick() {
        this.props.updateUser({id: this.props.currentUser, about: this.state.about, location: this.state.location, work: this.state.work})
    }

    handleFocus(e) {
        this.setState({[e.currentTarget.alt]: true})
    }

    handleBlur(e) {
        this.setState({[e.currentTarget.alt]: false})
    }

    render() {
        return (
            <div className="profile-form">
                <div className="inputs">
                    <div className="about">
                        <label>About</label>
                        <textarea value={this.state.about} onChange={this.handleInput('about')} onFocus={this.handleFocus} onBlur={this.handleBlur} alt="focusAbout"></textarea>
                    </div>
                    <div className="location">
                        <label>Location</label>
                        <input value={this.state.location} onChange={this.handleInput('location')} onFocus={this.handleFocus} onBlur={this.handleBlur} alt="focusLocation"/>
                    </div>
                    <div className="work">
                        <label>Work</label>
                        <input value={this.state.work} onChange={this.handleInput('work')} onFocus={this.handleFocus} onBlur={this.handleBlur} alt="focusWork"/>
                    </div>
                </div>
                <div className="form-buttons">
                    <button onClick={(this.handleCancelClick)}>Cancel</button>
                    <button onClick={(this.handleSaveClick)}>Save</button>
                </div>
            </div>
        )
    }
}

export default ProfileForm; 