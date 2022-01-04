import React from "react";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.email,
            password: "", 
            clicked: false, 
        }
        this.clicked = false; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        if(!this.props.errors) {
            this.props.closeModal();
        }
        const user = { email: this.state.email, password: this.state.password};
        this.props.login(user)
    }

    handleInput(field) {
        return e => {
            if(this.props.errors.length > 0 ) {
                this.props.resetSessionErrors();
            }
            this.setState({ [field]: e.currentTarget.value })

        };
    }

    handleFocus() {
        this.setState({ ['clicked']: true })
    }

    handleBlur() {
        this.setState({ ['clicked']: false })
    }

    render() {
        let errors = '';
        if (this.props.errors.length > 0) {
            errors = this.props.errors
        }
        else {
            errors = [];
        }
        debugger

        return (
            <div>
                <div className="session-form" id="login-form" onClick={ e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} className="session-form">
                        <h3>Log in</h3>
                        <div className={errors.length !== 0 ? 'input-field errored' : 'input-field'} id={this.state.clicked && errors.length === 0 ? 'clicked' : null}>
                            { this.state.clicked ? <label>Password </label> : null }
                            <input type="password" placeholder="Password" onFocus={this.handleFocus} onBlur={this.handleBlur} value={this.state.password} onChange={this.handleInput('password')} />
                        </div>
                        <p className="error">{ errors.length > 0 ? errors[0] : null}</p>
                        <button type="submit">Log In </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm; 