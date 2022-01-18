class Map {
    constructor(mapNode) {
        this.mapNode = mapNode;
        this.clicked = false;
        this.round = true;
        this.addLatLng = this.addLatLng.bind(this);
    }

    instantiateMap() {
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
            icons: [{
                icon: lineSymbol,
                offset: "0",
                repeat: "20px"
            }]
        });

        this.poly.setMap(this.map);

        this.poly.setVisible(true);

        this.map.addListener("mousedown", (e) => {
            this.clicked = !this.clicked
        });

        this.drawListener = this.map.addListener("mousemove", e => {
            if (e.domEvent.type === "mouseup") {
                console.log("mouseup")
            }
            if (this.clicked && this.round) {
                this.addLatLng(e)
            }
        })

        this.poly.addListener("mouseup", (e) => {
            if(this.clicked) {
                this.clicked = false;
                this.round = false;
                this.drawListener.remove(); 
                const bounds = new google.maps.LatLngBounds(); 
                this.path = this.poly.getPath().xd.forEach(item => {
                    bounds.extend(new google.maps.LatLng(item.lat(), item.lng()))
                })
                debugger 
                const service = new google.maps.places.PlacesService(this.map);
                    service.nearbySearch({
                        bounds: bounds, 
                        radius: 100, 
                        type: ['tourist_attraction'], 
                        // rankby: google.maps.places.RankBy.PROMINENCE
                    }, 
                    (results, status) => {
                        debugger 
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            debugger 
                            this.results = results.slice(0, 10)
                            debugger 
                            if (this.results) {
                                this.results.forEach(result => {
                                    const latLng = { lat: result.geometry.location.lat(), lng: result.geometry.location.lng() }
                                    const title = result.name
                                    new google.maps.Marker({ position: latLng, map: this.map, title: title })
                                })
                            }
                        }
                    })
            }
        })
    
    }

    addLatLng(e) {
        if (this.clicked && this.round) {
            const path = this.poly.getPath();
            path.push(e.latLng)
        }
    }
}


export default Map; 