import React from "react";


class EmailForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: ''} 
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDemoClick = this.handleDemoClick.bind(this)
    }

    handleInput(field) {
        return e => this.setState({[field]: e.currentTarget.value });
    }

    // componentDidUpdate() {
    //     this.props.findUser(this.state.email)
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.findUser(this.state.email).then(() => {
            if (this.props.email) {
                this.props.openModal('login')
            } else {
                this.props.openModal('signup')
            }
        })    
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
                        <div id="email-input-container">
                            <label>Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleInput('email')}/>
                        </div>
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