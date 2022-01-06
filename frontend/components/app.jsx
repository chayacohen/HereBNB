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

const App = () => (
    <div>
        <ModalContainer/>
        <header>
            <HeaderContainer />
        </header>
        {/* <Search/> */}
        <ScrollToTop>
            <Switch>
                <Route exact path = "/" component={Splash}/>
                <ProtectedRoute exact path="/users/show/:id" component={AccountContainer}/>
                <ProtectedRoute exact path="/users/edit-photo" component={UpdatePicFormContainer}/>
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