import React from "react";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.closeModal();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(() => this.props.history.push('/'))
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
                        <h3>Log in</h3>
                        <div id="input-field">
                            <label>Password  </label>
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        </div>
                        <button type="submit">Log In </button>
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

export default LoginForm; 