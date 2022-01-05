import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container'
import ModalContainer from './modal/modal_container'
import Splash from './splash/splash';
import Footer from './footer/footer';
import { Switch, Route } from 'react-router-dom';
import AccountContainer from './account/account_container';
import UpdatePicFormContainer from './account/update_pic_container';

const App = () => (
    <div>
        <ModalContainer/>
        <header>
            <HeaderContainer />
        </header>
        {/* <Search/> */}
        <Switch>
            <Route exact path = "/" component={Splash}/>
            <Route exact path="/users/show/:id" component={AccountContainer}/>
            <Route exact path="/users/edit-photo" component={UpdatePicFormContainer}/>
        </Switch>
        {/* <Route exact path="/listings" component={Listings}/> */}
        {/* <Route exact path="/" component={SearchContainer} /> */}
        <footer>
            <Footer/>
        </footer>
    </div>
)

export default App; 