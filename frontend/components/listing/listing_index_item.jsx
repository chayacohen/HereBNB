import React from "react";
import { Link } from "react-router-dom";

const ListingIndexItem = ({listing, fetchListing}) => (
    <Link to={`/listings/${listing.id}`} className="link">
        <div className="listing-index-container">
            <div className="listing-image">
            </div>
            <div className="about-listing">
                <p>{`${listing.city}, ${listing.state}`}</p>
                <p className="listing-price">$185 / night</p>
            </div>
        </div>
    </Link>
)


export default ListingIndexItem;
