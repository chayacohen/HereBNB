import React from 'react'; 
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {

    componentDidMount() {
        debugger
         this.props.requestAllListings(); 
    }

    render () {
        if (this.props.listings.length === 0) {
            return null;
        }
        return (
            <div>
                <ul>
                    {this.props.listings.map(listing => <ListingIndexItem listing={listing} requestListing={this.props.requestListing}/>)}
                </ul>
            </div>
        )
    }

}

export default ListingIndex