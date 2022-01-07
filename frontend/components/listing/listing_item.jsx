import React from "react";

class ListingItem extends React.Component {

    constructor(props) {
        super(props); 
    }
    

    componentDidMount() {
        this.props.requestListing(this.props.match.params.id)
    }


    render() {
        // goal is to replace placeholder divs to map the images of the listing
        //on click of city,state,country, takes you to map page
        if (!this.props.listing) {
            return null; 
        }

        return (
            <div className="listing-item">
                <p className="listing-title">{this.props.listing.title}</p>
                <div className="listing-details">
                    <p>{'\u2605'} </p>
                    <p> 5.0 {'\u00b7'}</p>
                    <p>0 reviews</p>
                    <p>{'\u00b7'}</p>
                    <p>{`${this.props.listing.city},${this.props.listing.state},United States`}</p>
                </div>
                <div className="image-show-listing">
                    <div className="main-image"></div>
                    <div className="rest-of-images">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <p>{`Entire home hosted by ${this.props.listing.host.first_name}`}</p>
            </div>
        )
    }
}

export default ListingItem;