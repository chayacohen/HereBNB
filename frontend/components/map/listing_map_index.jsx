import React from "react";
import MapListingIndexItem from './map_listing_index_item';

class MapListingIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.74737808872472, lng:- 73.8431824737353},
            zoom: 12
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions)
        google.maps.event.addListener(this.map, 'idle', () => {
            debugger 
            const bounds = this.map.getBounds().toJSON();
            this.props.requestAllListings({bounds: bounds})
        })
        // const map = document.getElementById("map")
        // const footer = document.querySelector(".footer")
        // document.addEventListener("scroll", () => {
        //     if((map.offsetTop + map.offsetHeight) >= (footer.offsetTop - 10)) {
        //         map.style.position = "absolute"
        //     }
        //  })
    }

    render() {

        if (!this.props.listings) {
            return null 
        }
        return (
            <div className="map-index" >
                <div className="map-listing-index">
                    <ul>{this.props.listings.map(listing => (
                        <MapListingIndexItem listing={listing} key={listing.id}/>
                    ))}</ul>
                    <div>
                    </div>
                </div>
                <div className="map-container">
                    <div id="map" className="map" ref={map => this.mapNode = map}></div>
                </div>
            </div>
        )
    }

}


export default MapListingIndex; 