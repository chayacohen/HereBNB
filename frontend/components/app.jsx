import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './Header/header_container'
import Search from './search/search';
const App = () => (
    <div>
        <header>
            <HeaderContainer />
        </header>
        <Search/>
        <AuthRoute exact path="/login" component={LoginFormContainer} /> 
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <Route exact path="/" component={SearchContainer} /> */}
    </div>
)

export default App; 