import React from "react";


class EmailForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: '', clicked: false, errors: []} 
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDemoClick = this.handleDemoClick.bind(this); 
        this.handleFocus = this.handleFocus.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 
    }

    handleInput(field) {
        return e => this.setState({[field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validEmail(email)) {
            this.props.findUser(this.state.email).then(() => {
                if (this.props.user) {
                    this.props.openModal('login')
                } else {
                    this.props.openModal('signup')
                }
            })    
        }
        else {
            this.state.errors.push('Invalid Email') 
        }
    }

    validEmail(email) {
        let atValid = false; 
        let dotValid = false; 
        const arr = []
        const split = email.split('@')
        if (split.length === 2 && split[1].includes('.')) {
            atValid = true; 
        }
        if(split[1].split('.').length > 1) {
            dotValid = true; 
        }

        return atValid && dotValid
    }

    handleFocus() {
        this.setState({['clicked']: true})
    }

    handleBlur() {
        this.setState({['clicked']: false})
    }

    handleDemoClick() {
        const user = {email: 'demo@user.com', password: 'password', first_name: 'Demo', last_name: 'User'}
        this.props.login(user); 
        this.props.closeModal();
    }

    render () {
        return (
            <div id="email-form">
                <h3>Log in or sign up</h3>
                <form onSubmit={this.handleSubmit}>
                    <h2>Welcome to Herebnb</h2>
                    <div id="email">
                        <div className="email-input-container" id={this.state.clicked ? 'clicked' : null}>
                            { this.state.clicked ? <label>Email</label> : null }
                            <input type="text" placeholder="Email" value={this.state.email} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput('email')}/>
                        </div>
                        <p className="error">{this.state.errors}</p>
                        <button type="submit">Continue</button>
                    </div>
                </form>
                <p>or</p>
                <button className="demo-user-button" onClick={this.handleDemoClick}>Continue with Demo User</button>
            </div>
        )
    }
}

export default EmailForm; 