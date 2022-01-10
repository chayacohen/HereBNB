import React from 'react';
import { Link } from 'react-router-dom';

class LocationType extends React.Component {

    constructor(props) {
        super(props);
        this.state = { location: '' }
        this.handleClick = this.handleClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }


    handleLogoClick() {
        this.props.history.push("/");
    }

    handleClick() {
        this.setState({ location: '?'})
    }

    handleNextClick() {
        this.props.receiveLocation(this.state.location);
    }

    render() {
        return (
            <div>
                <div className="location-type-listing">
                    <div className="question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-question">Where's your place located?</p>
                    </div>
                    <div className="question-options">
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={`/listings/create-listing/privacy-type`}>Back</Link>
                            {this.state.location !== '' ?
                                <Link className="link" id="next-button" onClick={this.handleNextClick} to={`/listings/create-listing/floor-plan`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LocationType;


