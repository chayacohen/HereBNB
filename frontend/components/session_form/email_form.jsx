import React from "react";


class EmailForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: ''} 
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(field) {
        debugger
        return e => this.setState({[field]: e.currentTarget.value });
    }

    // componentDidUpdate() {
    //     this.props.findUser(this.state.email)
    // }

    handleSubmit(e) {
        e.preventDefault();
       this.props.findUser(this.state.email)
       .then(response => { 
           if (response.user) {
                this.props.openModal('login')
            } else {
               this.props.openModal('signup')
            }}
        )
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
                <button className="demo-user-button">Continue with Demo User</button>
            </div>
        )
    }
}

export default EmailForm; 