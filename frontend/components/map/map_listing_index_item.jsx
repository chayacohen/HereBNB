import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MapListingIndexItem = ({listing}) => {
    return (
        <div >
            
            <div className="border-line" id="listing-index-item-border"></div>
            <div className="map-listing-index-item">
                <img src={listing.photoUrls[0]} className="map-listing-image"/>
                <div className="map-index-info">
                    <div className="map-index-title">
                        <p>{`Entire ${listing.specific.toLowerCase()} in ${listing.city}`}</p>
                        <FontAwesomeIcon icon={faHeart} id="heart"/>
                    </div>
                    <p className="map-title">{listing.title}</p>
                    <div id="short-border-line" className="border-lien"></div>
                    <div>
                        <div>
                            <p>{`${listing.guests} ${listing.guests > 1 ? 'guests' : 'guest'}`}</p>
                            <p>{'\u00b7'}</p>
                            <p>{`${listing.beds} ${listing.beds > 1 ? 'bedrooms' : 'bedroom'}`}</p>
                            <p>{'\u00b7'}</p>
                            <p>{`${listing.beds * 2} ${listing.beds > 1 ? 'beds' : 'bed'}`}</p>
                            <p>{'\u00b7'}</p>
                            <p>{`${listing.bath} ${listing.bath > 1 ? 'baths' : 'bath'}`}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>{'\u2605'}</p> 
                                <p>5.0</p>
                            </div>
                            <p>(20 reviews)</p>
                        </div>
                        <p>{`$${listing.price} / night`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapListingIndexItem;