import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "", 
            first_name: "", 
            last_name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formSpecifics = this.formSpecifics.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'))
    }

    formSpecifics() {
        if (this.props.formType === "signup") return {
            header: "Sign Up",
            linkPath: '/login',
            linkText: 'Log In'
        }
        else return {
            header: "Log In",
            linkPath: '/signup',
            linkText: 'Sign Up'
        }
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        const specifics = this.formSpecifics()
        let errors = '';
        if (this.props.errors) {
            errors = this.props.errors
        }
        else {
            errors = [];
        }

        return (
            <div>
                <h2>{specifics.header}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
                    </label>
                    <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
                <Link to={specifics.linkPath}>{specifics.linkText}</Link>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SessionForm; 