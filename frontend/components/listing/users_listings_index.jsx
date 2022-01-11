import React from "react";
import { Link } from "react-router-dom";
import UserListingIndexItem from "./user_listing_index_item";

class UserListingIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllUserListings(this.props.match.params.id); 
        this.props.requestUser(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.requestListing(this.props.match.params.id);
        } 
        // if (prevProps.currentUser !== this.props.currentUser) {
        //     this.props.requestUser(this.props.match.params.id);
        // }
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
        debugger 
        return (
            <div className="user-listings">
                <div className="listing-image-header">
                    <img/>
                </div>
                {this.props.currentUser && (this.props.currentUser.id.toString() === this.props.match.params.id) ? <Link className="link" to="/listings/create-listing" id="create-new-listing-button">Create new listing</Link> : null }
                <div className="container-listings">
                    <div>
                        <div id="sidebar"></div>
                        <div className="user-listing-all">
                            <p className="user-listing-all-header">{`${listings.length} listings`}</p>
                            <div className="border-line" id="amount-listings"></div>
                            <ul className="user_listings_index_list">
                                {listings.map(listing => <UserListingIndexItem listing={listing} key={listing.id}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserListingIndex;