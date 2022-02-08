import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './Header/header_container'
import ModalContainer from './modal/modal_container'
import Splash from './splash/splash';
import Footer from './footer/footer';
import { Switch, Route } from 'react-router-dom';
import AccountContainer from './account/account_container';
import UpdatePicFormContainer from './account/update_pic_container';
import ScrollToTop from './Header/scroll_to_top';
import ListingIndexContainer from './listing/listing_index_container';
import ListingItemContainer from './listing/listing_item_container';
import CreateListingContainer from './listing/create_listing_container';
import UserListingIndexContainer from './listing/user_listing_index_container';
import SpecificTypeContainer from './listing/specific_type_container';
import PrivacyTypeContainer from './listing/privacy_type_container';
import LocationTypeContainer from './listing/location_type_container';
import FloorPlanContainer from './listing/floor_plan_container';
import CreateListingPhotosContainer from './listing/add_listing_photos_container';
import CompleteListingFormContainer from './listing/complete_listing_form_container';
import EditListingFormContainer from './listing/edit_listing_form_container';
import MapListingIndexContainer from './map/listing_map_index_container';


const App = () => (
    <div>
        <ModalContainer/>
        <header>
            <HeaderContainer />
        </header>
        {/* <Search/> */}
        <ScrollToTop>
            <Switch>
                <Route exact path="/users/show/:id" component={AccountContainer}/>
                <ProtectedRoute exact path="/users/edit-photo" component={UpdatePicFormContainer}/>
                <Route exact path="/users/:id/listings" component={UserListingIndexContainer}></Route>
                <ProtectedRoute exact path='/listings/:id/create-listing/complete-listing' component={CompleteListingFormContainer}/>
                <ProtectedRoute exact path="/listings/:id/create-listing/floor-plan" component={FloorPlanContainer}/>
                <ProtectedRoute exact path="/listings/:id/create-listing/photos" component={CreateListingPhotosContainer}/>
                <ProtectedRoute exact path="/listings/:id/create-listing/location" component={LocationTypeContainer}/>
                <ProtectedRoute exact path="/listings/:id/create-listing/privacy-type" component={PrivacyTypeContainer}/>
                <ProtectedRoute exact path="/listings/:id/create-listing/:type" component={SpecificTypeContainer}/>
                <ProtectedRoute exact path="/listings/create-listing" component={CreateListingContainer}/>
                <ProtectedRoute exact path='/listings/:id/edit' component={EditListingFormContainer} />
                <Route exact path="/listings/guests/:guests" component={ListingIndexContainer}></Route>
                <Route exact path="/listings/:id" component={ListingItemContainer}></Route>
                <Route exact path="/map/:id/:guests" component={MapListingIndexContainer}></Route>
                <Route exact path = "/" component={Splash}/>
            </Switch>
        </ScrollToTop>
        {/* <Route exact path="/listings" component={Listings}/> */}
        {/* <Route exact path="/" component={SearchContainer} /> */}
        <footer>
            <Footer/>
        </footer>
    </div>
)

export default App; 