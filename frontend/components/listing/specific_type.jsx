import React from 'react';
import { Link } from 'react-router-dom';
 

class SpecificType extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {option_clicked: ''}
        this.handleClick = this.handleClick.bind(this); 
        this.handleLogoClick = this.handleLogoClick.bind(this); 
        this.handleNextClick = this.handleNextClick.bind(this); 
    }

    componentDidMount() {
        this.props.requestListing(this.props.match.params.id)
    }

    handleLogoClick() {
        this.props.history.push("/");
    }

    handleClick(e) {
        this.setState({ option_clicked: e.currentTarget.firstChild.firstChild.data })
    }

    handleNextClick() {
        this.props.listing.specific = this.state.option_clicked.toLowerCase(); 
        this.props.updateListing(this.props.listing);
    }

    render() {
        let options = ''
        if (this.props.match.params.type === "apartment") {
             options = ['Rental unit', 'Condominium(condo)', 'Loft', 'Serviced apartment', 'Vacation home']
        }
        else if (this.props.match.params.type === "house") {
            options = ['Residential home', 'Cabin', 'Vacation home', 'Townhouse', 'Farm stay']
        }
        else if (this.props.match.params.type === "secondaryunit") {
            options = ['Guesthouse', 'Guest suite', 'Farm stay', 'Vacation home', 'Backhouse']
        }
        else if (this.props.match.params.type === "bedandbreakfast") {
            options = ['Bed and breakfast', 'Nature lodge', 'Farm stay', 'Hotel', 'Other']
        }
        else if (this.props.match.params.type === "uniquespace") {
            options = ['Barn', 'Boat', 'Treehouse', 'Campsite', 'Tent']
        }

        return (
            <div>
                <div className="apartment-listing">
                    <div className="question">
                        <p className="logo" id="create-listing-logo" onClick={this.handleLogoClick}>herebnb</p>
                        <p className="the-question">Which of these best describes your place?</p>
                    </div>
                    <div className="question-options">
                        <div className="options">
                            <div id={this.state.option_clicked === options[0] ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>{options[0]}</p>
                            </div>
                            <div id={this.state.option_clicked === options[1] ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>{options[1]}</p>
                            </div>
                            <div id={this.state.option_clicked === options[2] ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>{options[2]}</p>
                            </div>
                            <div id={this.state.option_clicked === options[3] ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>{options[3]}</p>
                            </div>
                            <div id={this.state.option_clicked === options[4] ? 'place_type_clicked' : null} onClick={this.handleClick}>
                                <p>{options[4]}</p>

                            </div>
                        </div>
                        <div className="listing-buttons">
                            <Link className="link" id="back-button" to={`/listings/create-listing`}>Back</Link>
                            {this.state.option_clicked !== '' ?
                                <Link className="link" id="next-button" onClick={this.handleNextClick} to={`/listings/${this.props.listing.id}/create-listing/privacy-type`}>Next</Link> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SpecificType; 


