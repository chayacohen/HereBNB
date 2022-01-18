import React from "react";
import Map from './map';
import MarkerManager from "./new_marker_manager";


class DrawMapRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sortedResults: [], totalResults: [] }
        this.clicked = false;
        this.round = true; 
        this.start_pos = { lat: 34.071422, lng: -118.249808 }
        this.end_pos = { lat: 40.769180, lng: -73.984892 }
        this.addLatLng = this.addLatLng.bind(this);
        this.receiveResults = this.receiveResults.bind(this); 

    }

    componentDidMount() {
        this.map = new Map(this.mapNode)
        this.map.instantiateMap();
        debugger 
        this.map.map.addListener("mousedown", (e) => {
            this.clicked = !this.clicked
        });

        this.drawListener = this.map.map.addListener("mousemove", e => {
            if (e.domEvent.type === "mouseup") {
                console.log("mouseup")
            }
            if (this.clicked && this.round) {
                this.addLatLng(e)
            }
        })

        this.map.poly.addListener("mouseup", (e) => {
            if (this.clicked) {
                this.clicked = false;
                this.round = false;
                this.drawListener.remove();
                this.path = this.map.poly.getPath().xd
                debugger 

                this.receiveResults().then(() => {
                    let increment = Math.floor(this.state.totalResults.length / 10)
                    if (increment === 0) {
                        increment = 1
                    }
                    for (let i = 0; i < this.state.totalResults.length; i += increment) {
                        const result = this.state.totalResults[i];
                        this.markerManager.addMarker({ lat: result.geometry.location.lat(), lng: result.geometry.location.lng() })
                    }
                })
            }
        })
        this.markerManager = new MarkerManager(this.map)
        this.markerManager.addMarker(this.start_pos)
        this.markerManager.addMarker(this.end_pos)
    }

    addLatLng(e) {
        if (this.clicked && this.round) {
            const path = this.map.poly.getPath();
            path.push(e.latLng)
        }
    }

    receiveResults() {
        const promises = [];
        const service = new google.maps.places.PlacesService(this.map.map);
        const increment = Math.floor(this.path.length / 15)
        for (let i = 0; i < this.path.length; i += ( increment > 0 ? increment : 1)) {
            if (this.path[i])
            promises.push(new Promise ((resolve, reject) => {
                    service.nearbySearch({
                    location: { lat: this.path[i].lat(), lng: this.path[i].lng() },
                    radius: 50000,
                    type: ['tourist_attraction'],
                }, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        debugger 
                        this.setState({totalResults: this.state.totalResults.concat(results)})
                        resolve()
                    }
                    else if (status){
                        debugger 
                        resolve(); 
                    }
                })
            }))
        }
        return Promise.all(promises)
    }


    render() {
        return (
            <div className="map-container-test">
                <div className="map" ref={map => this.mapNode = map}></div>
            </div>
        )
    }
}


export default DrawMapRoute; 