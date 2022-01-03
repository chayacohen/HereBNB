import React from "react";
// import SearchIcon from '../../../app/assets/images/search-icon.png';

const Search = () => (
    <section className="search-container">
        <div className="search">
            <div id="location-container">
                <label>Location
                </label>
                    <input type="text" defaultValue="Where are you going?" />
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
                    {/* <img src={SearchIcon}/> */}
                    {/* <p>Search</p> */}
                </button>
            </div>
        </div>
    </section>
)

export default Search; 