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
            this.props.requestAllUserListings(this.props.match.params.id);
            this.props.requestUser(this.props.match.params.id)
        } 
    }

    render() {
        
        if (this.props.listings.length === 0) {
            return (
                <div className="user-listings">
                    <p>No listings yet!</p>
                    {this.props.currentUser && (this.props.currentUser.id.toString() === this.props.match.params.id) ? <Link className="link" to="/listings/create-listing">Create new listing</Link> : null }
                </div>
            )
        }
        
        if (!this.props.user) {
            return (
                <div className="user-listings">
                    <p>CANNOT LOCATE USER</p>
                </div>
            )
        }

        debugger

        const username = `${this.props.user.first_name ? this.props.user.first_name : ''}  ${this.props.user.last_name ? this.props.user.last_name : ''}` 

        const listings = this.props.listings 
        return (
            <div className="user-listings">
                <div className="listing-image-header">
                    <img src={window.nature}/>
                </div>
                <div className="container-listings">
                    <div>
                        <div id="sidebar">
                            <img src={this.props.currentUser.photoUrl} />
                            <p className="username"> {username !== '' ? <Link className="link username" to={`/users/show/${this.props.user.id}`}><p className="username">{username}</p></Link> : null }</p>
                            <p className="user-location">{this.props.user.location ? this.props.user.location : null}</p>
                            <div className="border-line" id="sidebar-border"></div>
                        </div>
                        <div className="user-listing-all">
                            <div className="all-header">
                                <p className="user-listing-all-header">{`${listings.length} listings`}</p>
                                {this.props.currentUser && (this.props.currentUser.id.toString() === this.props.match.params.id) ? <Link className="link" to="/listings/create-listing" id="create-new-listing-button">Create new listing</Link> : null }
                            </div>
                            <div className="border-line" id="amount-listings"></div>
                            <ul className="user_listings_index_list">
                                {listings.map(listing => <UserListingIndexItem listing={listing} key={listing.id} currentUser={this.props.currentUser} user={this.props.user} deleteListing={this.props.deleteListing}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserListingIndex;