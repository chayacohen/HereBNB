import React from "react";
import SearchOptions from "./search_options";
// import SearchIcon from '../../../app/assets/images/search-icon.png';

class Search extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {goingClicked: false, location: ''}
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        this.toggleGoing = this.toggleGoing.bind(this); 
        this.removeGoing = this.removeGoing.bind(this); 
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this); 
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
            componentRestrictions: { 'country': ['US'] },
            fields: ['place_id', 'geometry', 'name', 'formatted_address']
        })
        const autocomplete = this.autocomplete;
        autocomplete.addListener('place_changed', this.onPlaceChanged)
    }

    onPlaceChanged() {
        const place = this.autocomplete.getPlace();
        if (!place.geometry) {
            document.getElementById('autocomplete').placeholder = "Where are you going?";
        }
    }

    toggleGoing() {
        this.setState({goingClicked: true})
    }

    removeGoing() {
        this.setState({ goingClicked: false })
    }

    handleSearchButtonClick(e) {
        e.stopPropagation(); 
        // debugger
        if (!this.state.location && !this.state.goingClicked){
                this.setState({goingClicked: true}) 
        }
    }

    render() {
        return (
            <section className="search-container">
                <div className="search">
                    <div id="location-container">
                        <label>Location
                        </label>
                        <input id="autocomplete" placeholder='Where are you going?' type="text" 
                        onClick={this.toggleGoing}/>  
                    </div>
                    <div id="checkin-container">
                        <label>Check In
                        </label>
                        <input type="text" defaultValue="Add dates" />
                    </div>
                    <div id="checkout-container">
                        <label>Check Out
                        </label>
                        <input type="text" defaultValue="Add dates" />
                    </div>
                    <div id="guest-container">
                        <label>Guests
                        </label>
                        <input type="text" defaultValue="Add guests" />
                    </div>
                    <div id="search-button-container" onClick={this.handleSearchButtonClick}>
                        <button type="submit" id="search-icon">
                            <img src={window.search_icon} />
                            {/* <p>Search</p> */}
                        </button>
                    </div>
                </div>
                {this.state.goingClicked ? <SearchOptions toggleGoing={this.toggleGoing} removeGoing={this.removeGoing} goingClicked={this.state.goingClicked}/>: null}
            </section>
        )
    }
}

export default Search; 