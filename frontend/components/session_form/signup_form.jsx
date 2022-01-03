import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "", 
            first_name: "", 
            last_name: "", 
            firstInput: false, 
            secondInput: false, 
            thirdInput: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {
            email: this.props.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name}
            this.props.signup(user)
        if (!this.props.errors) {
            this.props.closeModal();
        }
    }

    handleInput(field) {
        return e => this.setState( { [field]: e.currentTarget.value });
    }

    handleFocus(e) {
        this.setState({ [e.currentTarget.alt]: true })
    }

    handleBlur(e) {
        this.setState({ [e.currentTarget.alt]: false })
    }

    render() {
        let errors = '';
        if (this.props.errors) {
            errors = this.props.errors
        }
        else {
            errors = [];
        }

        return (
            <div>
                <div id="signup-form" onClick={ e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} id="signup-form">
                        <h3>Finish signing up</h3>
                        <div className="input-field" id={this.state.firstInput ? 'clicked' : null}>
                            { this.state.firstInput ? <label>First Name</label> : null}
                            <input type="text" value={this.state.first_name} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput('first_name')} placeholder="First Name" alt="firstInput" />
                        </div>
                        <div className="input-field" id={this.state.secondInput ? 'clicked' : null}>
                            { this.state.secondInput ? <label>Last Name</label> : null}
                            <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.handleInput('last_name')} alt="secondInput" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                        </div>
                        <div className="input-field" id={this.state.thirdInput ? 'clicked' : null}>
                            { this.state.thirdInput ? <label>Password </label> : null}
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password" alt="thirdInput" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                        </div>
                        <button type="submit">Agree and continue </button>
                    </form>
                </div>
                    <ul id="errors">
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                            ))}
                    </ul>
            </div>
        )
    }
}

export default SignupForm; 