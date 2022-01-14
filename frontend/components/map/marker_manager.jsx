import React from 'react'; 

export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick
        this.markers = {};
        this.createMarkerFromListing = this.createMarkerFromListing.bind(this)
        // this.updateMarkers = this.updateMarkers.bind(this); 
    }

    updateMarkers(listings) {
        const listingsObj = {}; 
        listings.forEach(listing => 
            listingsObj[listing.id] = listing); 
        
        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing))

        
        Object.keys(this.markers) 
            .filter(listingId => !listingsObj[listingId])
            .forEach(listingId => this.removeMarker(this.markers[listingId]))
        //     if (!this.markers[listing.id]) {
        //         this.createMarkerFromlisting(listing)
        //     }
        // })
    }

    createMarkerFromListing(listing) {
        const position = new google.maps.LatLng(listing.lat, listing.lng)
        const marker = new google.maps.Marker({ position: position, map: this.map, listingId: listing.id})
        this.markers[listing.id] = marker;

        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }
} 