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
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
                <div id="other">
                    <h3>Projects</h3>
                    <p>Typing Mania</p>
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