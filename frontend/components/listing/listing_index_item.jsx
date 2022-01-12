import React from "react";
import { Link } from "react-router-dom";

const ListingIndexItem = ({listing, fetchListing}) => (
    <Link to={`/listings/${listing.id}`} className="link">
        <div className="listing-index-container">
            <img className="listing-image" src={listing.photoUrls ? listing.photoUrls[0] : ''} alt="" />
            
            
            <div className="about-listing">
                <p>{`${listing.city}, ${listing.state}`}</p>
                <p className="listing-price">{`$${listing.price} / night`}</p>
            </div>
        </div>
    </Link>
)


export default ListingIndexItem;
