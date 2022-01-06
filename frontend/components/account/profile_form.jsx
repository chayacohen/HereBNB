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
        this.handleSubmit = this.handleSubmit.bind(this); 
    }


    handleInput(field) {
        return e => 
            this.setState({[field]: e.currentTarget.value})
    }

    handleCancelClick () {
        this.props.changeClickedState()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.currentUser.about = this.state.about; 
        this.props.currentUser.location = this.state.location; 
        this.props.currentUser.work = this.state.work; 
        
        this.props.updateUser(this.props.currentUser)
        this.props.changeClickedState()
    }


    handleFocus(e) {
        this.setState({[e.currentTarget.name]: true})
    }

    handleBlur(e) {
        this.setState({[e.currentTarget.name]: false})
    }

    render() {
        return (
                <form className="profile-form" onSubmit={this.handleSubmit}>
                    <div className="inputs">
                        <div className="about">
                            <label>About</label>
                            <textarea id={this.state.focusAbout ? "focused" : null} value={this.state.about} onChange={this.handleInput('about')} onFocus={this.handleFocus} onBlur={this.handleBlur} 
                            // name="focusAbout"
                            ></textarea>
                        </div>
                        <div className="location">
                            <label>Location</label>
                        <input id={this.state.focusLocation ? "focused" : null} value={this.state.location} onChange={this.handleInput('location')} onFocus={this.handleFocus} onBlur={this.handleBlur} 
                        // name="focusLocation"
                        />
                        </div>
                        <div className="work">
                            <label>Work</label>
                        <input id={this.state.focusWork ? "focused" : null} value={this.state.work} onChange={this.handleInput('work')} onFocus={this.handleFocus} onBlur={this.handleBlur} 
                        // name="focusWork"
                        />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button onClick={(this.handleCancelClick)}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
        )
    }
}

export default ProfileForm; 