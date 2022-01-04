import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container'
import ModalContainer from './modal/modal_container'
import Splash from './splash/splash';
import Inspiration from './splash/inspiration';
import Footer from './footer/footer';
import { Switch, Route } from 'react-router-dom';
import Account from './account/account';

const App = () => (
    <div>
        <ModalContainer/>
        <header>
            <HeaderContainer />
        </header>
        {/* <Search/> */}
        <Splash/>
        <Inspiration/>

        <Switch>
            <Route path="/users/:id" component={Account}/>
        </Switch>
        {/* <Route exact path="/listings" component={Listings}/> */}
        {/* <Route exact path="/" component={SearchContainer} /> */}
        <footer>
            <Footer/>
        </footer>
    </div>
)

export default App; 