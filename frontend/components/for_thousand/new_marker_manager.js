class MarkerManager {

    constructor(map) {
        this.map = map;
        this.markers = [];
    }

    addMarker(position) {
        const marker = new google.maps.Marker({
            position: position,
            map: this.map.map,
        });
        this.markers.push(marker);
    }
}


export default MarkerManager; 