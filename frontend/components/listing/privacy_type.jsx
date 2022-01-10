import React from 'react';
import { Link } from 'react-router-dom';

class PrivacyType extends React.Component {

    constructor(props) {
        super(props);
        this.state = { option_clicked: '' }
        this.handleClick = this.handleClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }


    handleLogoClick() {
        this.props.history.push("/");
    }

    handleClick(e) {
        this.setState({ option_clicked: e.currentTarget.firstChild.firstChild.data })
    }

    handleNextClick() {
        this.props.receivePrivacyType(this.state.option_clicked.toLowerCase());
    }

    render() { 
        return (
            <div>
                <div className="privacy-type-listing">
                    <div className="question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-question">What kind of space will guests have?</p>
                    </div>
                    <div className="question-options">
                        <div className="options">
                            <div id={this.state.option_clicked === "An entire place" ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>An entire place</p>
                            </div>
                            <div id={this.state.option_clicked === 'A private room' ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>A private room</p>
                            </div>
                            <div id={this.state.option_clicked === 'A shared room' ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>A shared room</p>
                            </div>
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={`/listings/create-listing/${this.props.place.split(' ').join('')}`}>Back</Link>
                            {this.state.option_clicked !== '' ?
                                <Link className="link" id="next-button" onClick={this.handleNextClick} to={`/listings/create-listing/location`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PrivacyType;


