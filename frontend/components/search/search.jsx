import React from "react";
import SearchOptions from "./search_options";
import GuestOptions from "./guest_options";
// import SearchIcon from '../../../app/assets/images/search-icon.png';

class Search extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { goingClicked: false, location: '', guestClicked: false, adults: 0, children: 0, infants: 0}
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        this.addGoing = this.addGoing.bind(this); 
        this.removeGoing = this.removeGoing.bind(this); 
        this.addGuest = this.addGuest.bind(this); 
        this.removeGuest = this.removeGuest.bind(this); 
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this); 
        this.handleInputFocus = this.handleInputFocus.bind(this); 
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
        else {
            const lat = place.geometry.location.lat(); 
            const lng = place.geometry.location.lng(); 
            this.setState({location: {lat: lat, lng: lng}});

        }
    }

    removeGuest() {
        this.setState({guestClicked: false})
    }
    addGuest() {
        this.setState({guestClicked: true})
    }

    addGoing() {
        this.setState({goingClicked: true})
    }

    removeGoing() {
        this.setState({ goingClicked: false })
    }

    addAdult() {
        this.setState({adults: this.state.adults +=1})
    }
    removeAdult() {
        if (this.state.adults !== 0) {
            this.setState({adults: this.state.adults -=1})
        }
    }
    addChild() {
        this.setState({adults: this.state.children +=1})
    }
    removeChild() {
        if (this.state.children !== 0) {
            this.setState({adults: this.state.children -=1})
        }
    }
    addInfant() {
        this.setState({infants: this.state.infants +=1})
    }
    removeInfant() {
        if (this.state.infants !== 0) {
            this.setState({infants: this.state.infants -=1})
        }
    }
 
    handleSearchButtonClick(e) {
        // e.stopPropagation(); 
        // debugger
        if (!this.state.location && !this.state.goingClicked){
            const locationContainer = document.getElementById("location-container"); 
            locationContainer.focus(); 
        }
    }

    handleInputFocus(e) {
        debugger 
        if (!this.state.goingClicked) {
            e.target.blur(); 
            // e.preventDefault(); 
        }
    }


    // if dropdown not showing, click on input, prevent default on input 
    // if it is, dont prevent default 

    render() {
        return (
            <section className="search-container">
                <div className="search">
                    <div id="location-container" onFocus={this.addGoing} onBlur={this.removeGoing} tabIndex="1">
                        <label>Location
                        </label>
                        <input id="autocomplete" placeholder='Where are you going?' type="text" 
                        onFocus={this.handleInputFocus}/>  
                        {this.state.goingClicked ? <SearchOptions addGoing={this.addGoing} removeGoing={this.removeGoing} goingClicked={this.state.goingClicked} /> : null}
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
                    <div id="guest-container" onFocus={this.addGuest} onBlur={this.removeGuest} tabIndex="1">
                        <label>Guests
                        </label>
                        <input type="text" value="Add guests" readOnly onFocus={(e) => e.target.blur()}/>
                        {this.state.guestClicked ? <GuestOptions 
                        addGuest={this.addGuest} 
                        removeGuest={this.removeGuest} 
                        guestClicked={this.state.guestClicked}
                        addAdult={() => this.addAdult} 
                        removeAdult={() => this.removeAdult} 
                        addChild={this.addChild} 
                        removeChild={this.removeChild} 
                        addInfant={this.addInfant} 
                        removeInfant={this.removeInfant} 
                        onClick={(e) => e.stopPropagation()}/> : null}

                    </div>
                    <div id="search-button-container" onClick={this.handleSearchButtonClick}>
                        <button type="submit" id="search-icon">
                            <img src={window.search_icon} />
                            {/* <p>Search</p> */}
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Search; 