import React from 'react'; 
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {

    componentDidMount() {
         this.props.requestAllListings(); 
         const header = document.getElementById("nav-bar")
         header.style.backgroundColor = "white"; 
         header.style.color = "red";
    }

    render () {
        if (this.props.listings.length === 0) {
            return null;
        }
        return (
            <div className='listing-container'>
                <ul className="all-listings">
                    {this.props.listings.map(listing => <ListingIndexItem listing={listing} requestListing={this.props.requestListing} key={listing.id}/>)}
                </ul>
            </div>
        )
    }

}

export default ListingIndex