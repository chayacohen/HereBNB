import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './Header/header_container'
import Search from './search/search';
import ModalContainer from './modal/modal_container'
import ProfileMenuContainer from './Header/profile_menu_container';
import Splash from './splash/splash';
import Inspiration from './splash/inspiration';
import Footer from './footer/footer';

const App = () => (
    <div>
        <ModalContainer/>
        <header>
            <HeaderContainer />
        </header>
        {/* <Search/> */}
        <Splash/>
        <Inspiration/>
        {/* <Route exact path="/listings" component={Listings}/> */}
        {/* <Route exact path="/" component={SearchContainer} /> */}
        <footer>
            <Footer/>
        </footer>
    </div>
)

export default App; 