import React from "react";
import SearchOptions from "./search_options";
// import SearchIcon from '../../../app/assets/images/search-icon.png';

class Search extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {goingClicked: false}
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        this.focusGoing = this.focusGoing.bind(this); 
        this.blurGoing = this.blurGoing.bind(this); 
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

    focusGoing() {
        this.setState({goingClicked: true})
    }

    blurGoing() {
        this.setState({ goingClicked: false })
    }

    render() {
        return (
            <section className="search-container">
                <div className="search">
                    <div id="location-container">
                        <label>Location
                        </label>
                        <input id="autocomplete" placeholder='Where are you going?' type="text" onFocus={this.focusGoing}
                        onBlur={this.blurGoing}/>  
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
                    <div id="search-button-container" >
                        <button type="submit" id="search-icon">
                            <img src={window.search_icon} />
                            {/* <p>Search</p> */}
                        </button>
                    </div>
                </div>
                {this.state.goingClicked ? <SearchOptions/> : null}
            </section>
        )
    }
}

export default Search; 