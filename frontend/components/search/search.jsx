import React from "react";
import SearchOptions from "./search_options";
import GuestOptionsContainer from "./guest_options_container";
// import SearchIcon from '../../../app/assets/images/search-icon.png';

class Search extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { goingClicked: false, location: '', guestClicked: false, guestTab: 'Add guests'}
        this.onPlaceChanged = this.onPlaceChanged.bind(this); 
        this.addGoing = this.addGoing.bind(this); 
        this.removeGoing = this.removeGoing.bind(this); 
        this.addGuest = this.addGuest.bind(this); 
        this.removeGuest = this.removeGuest.bind(this); 
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this); 
        this.handleInputFocus = this.handleInputFocus.bind(this); 
        this.changeTab = this.changeTab.bind(this); 
    }

    handleInputChange(e) {
       if (e.target.value === '') {
        this.addGoing()
       } 
       else {
           this.removeGoing()
       }
    }

    componentDidMount() {
            this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
                componentRestrictions: { 'country': ['US'] },
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
            // const lat = place.geometry.location.lat(); 
            // const lng = place.geometry.location.lng(); 
            const autocomplete = document.getElementById("autocomplete");
            const value = autocomplete.value; 
            this.setState({location: value});

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

    changeTab(tab) {
        this.props.changeGuestTab(tab)
        this.setState({guestTab: tab})
    }
 
    handleSearchButtonClick(e) {
        const guests = this.props.adult + this.props.child
        const autocomplete = document.getElementById("autocomplete");
        const value = autocomplete.value; 
        if (this.state.location === '' && !this.state.goingClicked){
            const locationContainer = document.getElementById("location-container"); 
            locationContainer.focus(); 
        }
        else if (this.state.location !== '' && guests === 0 ){
            this.props.history.push(`/map/${value}/0`)
        }
        else if (this.state.location !== '' && guests > 0) {
            this.props.history.push(`/map/${value}/${guests}`)
        }
    }

    handleInputFocus(e) { 
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
                        {/* {this.state.goingClicked ?  */}
                        <input id="autocomplete" placeholder='Where are you going?' type="text" onClick={this.addGoing} onChange={(e) => this.handleInputChange(e)}/> 
                         {/* : <p className="replace-input">Where are you going?</p> } */}
                        {this.state.goingClicked ? <SearchOptions addGoing={this.addGoing} removeGoing={this.removeGoing} goingClicked={this.state.goingClicked} searchLocation={this.state.location}/> : null}
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
                        {this.state.guestClicked ? <GuestOptionsContainer
                        addGuest={this.addGuest} 
                        removeGuest={this.removeGuest} 
                        guestClicked={this.state.guestClicked}
                        changeTab={this.changeTab}
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