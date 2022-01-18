import React from "react";
import Map from './map';
import MarkerManager from "./new_marker_manager";


class DrawMapRoute extends React.Component {
    constructor(props) {
        super(props)
        this.start_pos = { lat: 34.071422, lng: -118.249808 }
        this.end_pos = { lat: 40.769180, lng: -73.984892 }
    }

    componentDidMount() {
        this.map = new Map(this.mapNode)
        this.map.instantiateMap()
        this.markerManager = new MarkerManager(this.map)
        this.markerManager.addMarker(this.start_pos)
        this.markerManager.addMarker(this.end_pos)
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