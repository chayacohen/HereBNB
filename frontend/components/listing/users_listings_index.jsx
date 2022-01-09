import React from "react";
import { Link } from "react-router-dom";
import UserListingIndexItem from "./user_listing_index_item";
// import {Link} 

class UserListingIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllUserListings(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.requestListing(this.props.match.params.id);
        } 
    }

    render() {

        if (this.props.listings.length === 0) {
            return (
                <div className="user-listings">
                    <p>No listings yet!</p>
                    <Link className="link" to="/listings/create-listing">Create new listing</Link>
                </div>
            )
        }
 
        const listings = this.props.listings 
        return (
            <div className="user-listings">
                <ul>
                    {listings.map(listing => <UserListingIndexItem listing={listing} key={listing.id}/>)}
                </ul>
                <Link className="link" to="/listings/create-listing">Create new listing</Link>
            </div>
        )
    }
}

export default UserListingIndex;