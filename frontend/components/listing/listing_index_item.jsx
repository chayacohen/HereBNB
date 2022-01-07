import React from "react";

const ListingIndexItem = ({listing, fetchListing}) => (
    <div>
        <div className="listing-image">
        </div>
        <div className="about-listing">
            <p>{`${listing.city}, ${listing.state}`}</p>
            <p>$185 / night</p>
        </div>

    </div>
)


export default ListingIndexItem;
