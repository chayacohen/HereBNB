import React from "react";
import SearchOptions from "./search_options";
import GuestOptions from "./guest_options";
// import SearchIcon from '../../../app/assets/images/search-icon.png';

class Search extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { goingClicked: false, location: '', guestClicked: false, adults: 0, children: 0, infants: 0, guestTab: 'Add guests'}
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        this.addGoing = this.addGoing.bind(this); 
        this.removeGoing = this.removeGoing.bind(this); 
        this.addGuest = this.addGuest.bind(this); 
        this.removeGuest = this.removeGuest.bind(this); 
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this); 
        this.handleInputFocus = this.handleInputFocus.bind(this); 
    }

    componentDidMount() {
        
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
        if (!this.autocomplete) {
            this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
                componentRestrictions: { 'country': ['US'] },
                fields: ['place_id', 'geometry', 'name', 'formatted_address']
            })
            const autocomplete = this.autocomplete;
            autocomplete.addListener('place_changed', this.onPlaceChanged)
        }
    }

    removeGoing() {
        this.setState({ goingClicked: false })
    }

    addAdult() {
        this.state.adults += 1; 
        const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`; 
        const infantString = this.state.infants ? sing : ''; 
        const tab = this.state.adults === 1 ? `${this.state.adults + this.state.children} guest${infantString}` : `${this.state.adults + this.state.children} guests${infantString}`
        this.setState({ adults: this.state.adults, guestTab: tab})
    }
    removeAdult() {
        if (this.state.adults !== 0) {
            this.state.adults -= 1
            const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`;
            const infantString = this.state.infants ? sing : '';
            const tab = this.state.adults === 1 ? `${this.state.adults + this.state.children} guest${infantString}` : this.state.adults === 0 ? 'Add guests' : `${this.state.adults + this.state.children} guests${infantString}`
            this.setState({adults: this.state.adults, guestTab: tab})
        }
    }
    addChild() {
        if (this.state.children === 0) {
            this.state.adults = 1;
        }
        this.state.children += 1;
        const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`;
        const infantString = this.state.infants ? sing : '';
        const tab = `${this.state.adults + this.state.children} guests${infantString}`
        this.setState({ adults: 1, children: this.state.children, guestTab: tab })
    }
    removeChild() {
        if (this.state.children !== 0) {
            this.state.children -= 1; 
            const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`;
            const infantString = this.state.infants ? sing : '';
            const tab = this.state.adults + this.state.children === 1 ? `${this.state.adults + this.state.children} guest${infantString}` : `${this.state.adults + this.state.children} guests${infantString}`
            this.setState({ children: this.state.children, guestTab: tab })
        }
    }

    addInfant() {
        if (this.state.adults === 0 && this.state.infants < 5) {
            this.state.adults = 1;
        }
        if (this.state.infants < 5) {
            this.state.infants += 1;
            const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`;
            const infantString = this.state.infants ? sing : '';
            const tab = this.state.adults === 1 ? `${this.state.adults + this.state.children} guest${infantString}` : `${this.state.adults + this.state.children} guests${infantString}`
            this.setState({ infants: this.state.infants, adults: this.state.adults, guestTab: tab })
        }
    }
    removeInfant() {
        if (this.state.infants !== 0 && this.state.adults < 2) {
            this.state.infants -= 1; 
            const sing = this.state.infants === 1 ? `, ${this.state.infants} infant` : `, ${this.state.infants} infants`;
            const infantString = this.state.infants ? sing : '';
            const tab = this.state.adults === 1 ? `${this.state.adults + this.state.children} guest${infantString}` : `${this.state.adults + this.state.children} guests${infantString}`
            this.setState({ infants: this.state.infants, guestTab: tab})
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
                        <p className="label">Location
                        </p>
                        {this.state.goingClicked ? 
                        <input id="autocomplete" placeholder='Where are you going?' type="text" onClick={this.addGoing}/> : <p className="replace-input">Where are you going?</p> }
                        {this.state.goingClicked ? <SearchOptions addGoing={this.addGoing} removeGoing={this.removeGoing} goingClicked={this.state.goingClicked} /> : null}
                    </div>
                    <div id="checkin-container">
                        <p className="label">Check In
                        </p>
                        <input type="text" placeholder="Add dates" />
                    </div>
                    <div id="checkout-container">
                        <p className="label">Check Out
                        </p>
                        <input type="text" placeholder="Add dates" />
                    </div>
                    <div id="guest-container" onFocus={this.addGuest} onBlur={this.removeGuest} tabIndex="1">
                        <p className="label">Guests
                        </p>
                        <p onFocus={(e) => e.target.blur()} className="replace-input">{this.state.guestTab}</p>
                        {this.state.guestClicked ? <GuestOptions 
                        addGuest={this.addGuest} 
                        removeGuest={this.removeGuest} 
                        guestClicked={this.state.guestClicked}
                        addAdult={() => this.addAdult()} 
                        removeAdult={() => this.removeAdult()} 
                        addChild={() => this.addChild()} 
                        removeChild={() => this.removeChild()} 
                        addInfant={() =>this.addInfant()} 
                        removeInfant={() =>this.removeInfant()} 
                        infants={this.state.infants}
                        adults={this.state.adults}
                        children={this.state.children}
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