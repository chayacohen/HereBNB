import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
class Map extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {clicked: false, round: true}
        this.addLatLng = this.addLatLng.bind(this); 
        // this.toggleMapDrawListener = this.toggleMapDrawListener.bind(this); 
    }
    
    componentDidMount() {
        const mapOptions = {
            center: { lat: 41.850033, lng: -87.6500523 },
            zoom: 5, 
            draggable: false 
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions); 

        const lineSymbol = {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 4,
        };
        this.poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 0,
            // strokeWeight: 3,
            icons: [{
                icon: lineSymbol, 
                offset: "0", 
                repeat: "20px"
            }]
        });

        this.poly.setMap(this.map); 
        // can drag the polyline 
        // this.poly.setEditable(true); 
        // makes line invisible 
        // this.poly.setVisible(false); 
        this.destinationMarker = new google.maps.Marker({
            position: { lat: 34.071422, lng: -118.249808},
            map: this.map,
        });
        new google.maps.Marker({
            position: { lat: 40.769180, lng: -73.984892},
            map: this.map,
        });

        // this.drawingManager = new google.maps.drawing.DrawingManager({
        //     drawingMode: google.maps.drawing.OverlayType.POLYLINE,
        //     drawingControl: false
        // });
        // this.drawingManager.setMap(this.map)
        this.poly.setVisible(true);

        this.map.addListener("mousedown", (e) => {
                this.setState({clicked: !this.state.clicked})
        });

        this.drawListener = this.map.addListener("mousemove", e => {
            // e.preventDefault(); 
            if (e.domEvent.type === "mouseup") {
                console.log("mouseup")
            }
            if (this.state.clicked && this.state.round) {
                this.addLatLng(e)
            }
        })

        this.poly.addListener("mouseup", (e) => {
            debugger
            this.setState({ clicked: false, round: false })
            this.drawListener.remove()
        })
        // on mousedown, it starts tracking the path with mouseover, adding Lat and lng to the line, and with mouseup, it stops adding lat/lng
    }
    
    // toggleMapDrawListener() {
    //     this.setState({clicked: !this.state.clicked})
    //     document.addEventListener("mousedown", (e) => {
    //         debugger 
    //     })
    //     this.map.addListener("mousedown", (e) => { debugger 
    //         this.addLatLng})
    // }

    // componentDidUpdate(prevState) {
    //     if (this.state.clicked && this.state.clicked !== prevState.clicked) {
    //         const that = this; 
    //         this.map.addListener("mouseup", () => {
    //             that.setState({ clicked: false, round: false })
    //         })
    //     }
    // }

    addLatLng(e) {
        if (this.state.clicked && this.state.round) {
            // debugger 
            const path = this.poly.getPath();
            path.push(e.latLng)
            
            // setTimeout((path.push(e.latLng)), 5000)
    
            // debugger 
            // new google.maps.Marker({
            //     position: e.latLng,
            //     title: "#" + path.getLength(),
            //     map: this.map,
            // });
        }
        // else {
        //     this.drawListener.remove()
        // }
    }

    render() {
        return (
            <div className="map-container-test">
                <div className="map" ref={map => this.mapNode = map}></div>
            </div>
        )
    }
}


export default Map; 