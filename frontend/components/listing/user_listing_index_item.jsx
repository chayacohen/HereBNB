import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserListingIndexItem = ({listing}) => {

    return (
        <div className="user-listing-index-item">
            <Link className="link" to={`/listings/${listing.id}`}><img /></Link>
            <div>
                <p>{`$${listing.price}`}</p>
                <p><FontAwesomeIcon icon={faBolt}/></p>
                <p>{listing.title}</p>
            </div>
            
        </div>
    )
}

export default UserListingIndexItem;