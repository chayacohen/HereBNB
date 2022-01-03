import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "", 
            first_name: "", 
            last_name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.signup(user)
        .then(() => this.props.history.push('/'))
        if (this.props.errors.length === 0) {
            this.props.closeModal();
        }
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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
                        <div id="input-field">
                            <label>First Name</label>
                            <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
                        </div>
                        <div id="input-field">
                            <label>Last Name</label>
                            <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
                        </div>
                        <div id="input-field">
                            <label>Email  </label>
                            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                        </div>
                        <div id="input-field">
                            <label>Password  </label>
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
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