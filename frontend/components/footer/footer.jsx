import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Footer extends React.Component {

    render () {
        const splitPathname = this.props.location.pathname.split('/');
        debugger 
        if (splitPathname[2] === 'create-listing' || splitPathname[1] === "map") {
            return null
        }

        return (
            <div className="footer">
                <div id="contact">
                    <h3>Contact Info</h3>
                    <p>Chaya Cohen</p>
                    <p>chayac100@gmail.com</p>
                    <p>Brooklyn, NY</p>
                </div>
                <div id="about">
                    <h3>About Me</h3>
                    <p><a href="https://github.com/chayacohen" target="_blank">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/chaya-cohen-6a3035142/" target="_blank">LinkedIn</a></p>
                </div>
                <div id="other">
                    <h3>Projects</h3>
                    <p><a href="http://a-thousand-miles.herokuapp.com/" target="_blank">A Thousand Miles</a></p>
                    <p><a href="https://chayacohen.github.io/Typing-Mania/" target="_blank">Typing Mania</a></p>
                </div>
                <div id="languages">
                    <h3>Languages</h3>
                    <p>CSS</p>
                    <p>HTML</p>
                    <p>Javascript</p>
                    <p>PostgreSQL</p>
                    <p>Rails</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Ruby</p>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null)(Footer));  