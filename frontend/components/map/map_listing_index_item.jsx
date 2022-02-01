import React from 'react'; 
import {Link} from 'react-router-dom'; 

class MapListingIndexItem extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {clicked: false };
        this.handleHeartClick = this.handleHeartClick.bind(this);
        this.handleListingClick = this.handleListingClick.bind(this); 
    }

    handleHeartClick() {
        if (this.state.clicked === false) {
            this.setState({clicked: true})
        }
        else {
            this.setState({clicked: false})
        }
    }

    handleListingClick() {
        this.props.history.push(`/listings/${this.props.listing.id}`)
    }
    
    
    render () {
        const listing = this.props.listing
        return (
            <div >
                <div className="border-line" id="listing-index-item-border"></div>
                <div className="map-listing-index-item" onClick={this.handleListingClick}>
                    <Link to={`/listings/${listing.id}`} className="link">
                    <img src={listing.photoUrls[0]} className="map-listing-image" />
                    </Link>
                    <div className="map-index-info">
                        <div className="map-index-title">
                            <Link to={`/listings/${listing.id}`} className="link">
                            <p>{`Entire ${listing.specific.toLowerCase()} in ${listing.city}`}</p>
                            </Link>
                            {this.state.clicked ? <p className="red-heart" onClick={this.handleHeartClick}>{'\u2665'}</p> : <p className="outline-heart" onClick={this.handleHeartClick}>{'\u2661'}</p>}
                        </div>
                        <Link to={`/listings/${listing.id}`} className="link">
                        <p className="map-title">{listing.title}</p></Link>
                        <Link to={`/listings/${listing.id}`} className="link">
                        <div id="short-border-line" className="border-line"></div></Link>
                        <Link to={`/listings/${listing.id}`} className="link">
                        <div className="bottom-map-index">
                            <div className="map-floor-plan">
                                <p>{`${listing.guests} ${listing.guests > 1 ? 'guests' : 'guest'}`}</p>
                                <p>{'\u00b7'}</p>
                                <p>{`${listing.beds} ${listing.beds > 1 ? 'bedrooms' : 'bedroom'}`}</p>
                                <p>{'\u00b7'}</p>
                                <p>{`${listing.beds * 2} ${(listing.beds * 2) > 1 ? 'beds' : 'bed'}`}</p>
                                <p>{'\u00b7'}</p>
                                <p>{`${listing.bath} ${listing.bath > 1 ? 'baths' : 'bath'}`}</p>
                            </div>
                            <div className="lower-bottom-map">
                                <div className="map-reviews-container">
                                    <div className="map-reviews">
                                        <p className="star" id="map-index-star">{'\u2605'}</p>
                                        <p className="map-review-num">5.0</p>
                                    </div>
                                    <p>(20 reviews)</p>
                                </div>
                                <div className="map-price-night">
                                    <p>{`$${listing.price}`}</p>
                                    <p>/  night</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default MapListingIndexItem;