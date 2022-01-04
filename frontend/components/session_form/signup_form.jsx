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
        return e => {
            if (this.props.errors) {
                this.props.resetSessionErrors(); 
            }
            this.setState( { [field]: e.currentTarget.value });
        }
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

        const passwordErrors = [];
        const otherErrors = [];
        errors.forEach(error => {
            if (error.includes('password') || error.includes('Password')) {
                passwordErrors.push(error)
            }
            else {
                otherErrors.push(error)
            }
        });

        return (
            <div>
                <div className="session-form" onClick={ e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} className="session-form">
                        <h3>Finish signing up</h3>
                        <div className="input-field" id={this.state.firstInput ? 'clicked' : null}>
                            { this.state.firstInput ? <label>First Name</label> : null}
                            <input type="text" value={this.state.first_name} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput('first_name')} placeholder="First Name" alt="firstInput" />
                        </div>
                        <div className={passwordErrors.length === 0 ? "input-field" : "input-field errored"} id={this.state.secondInput ? 'clicked' : null}>
                            { this.state.secondInput ? <label>Last Name</label> : null}
                            <input type="text" value={this.state.last_name} placeholder="Last Name" onChange={this.handleInput('last_name')} alt="secondInput" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                        </div>
                        <div className="input-field" id={this.state.thirdInput ? 'clicked' : null}>
                            { this.state.thirdInput ? <label>Password </label> : null}
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password" alt="thirdInput" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                        </div>
                        <ul className="error">
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <button type="submit">Agree and continue </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm; 