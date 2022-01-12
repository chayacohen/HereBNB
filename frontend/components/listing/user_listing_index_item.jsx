import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTrashAlt, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class UserListingIndexItem extends React.Component {

    constructor(props) {
        super(props); 
        this.handleDeleteClick = this.handleDeleteClick.bind(this); 
        this.handleEditClick = this.handleEditClick.bind(this); 
    }

    handleDeleteClick() {
        this.props.deleteListing(this.props.listing.id)
    }

    handleEditClick() {
        this.props.history.push(`/listings/${this.props.listing.id}/edit`)
    }

    render() {
        const listing = this.props.listing; 
        return (
            <div className="user-listing-index-item">
                <Link className="link" to={`/listings/${this.props.listing.id}`}><img src={listing.photoUrls ? listing.photoUrls[0] : ''}/></Link>
                <div className="listing-index-item-info">
                    <div className="old-first">
                        <p>{`$${this.props.listing.price}`}</p>
                        <p><FontAwesomeIcon icon={faBolt}/></p>
                        <p>{this.props.listing.title}</p>
                    </div>
                    <div className="listing-function-icons">
                        {this.props.currentUser  && this.props.user.id === this.props.currentUser.id ? <p onClick={this.handleEditClick} className="edit"><FontAwesomeIcon icon={faPencilAlt}/></p> : null}
                        <br/>
                        {this.props.currentUser && this.props.user.id === this.props.currentUser.id ? <p onClick={this.handleDeleteClick} className="delete"><FontAwesomeIcon icon={faTrashAlt}/></p> : null}
                    </div>
                </div>
            </div>
        )
        }
}

export default UserListingIndexItem;