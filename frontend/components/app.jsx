import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container'
const App = () => (
    <div>
        <header>
            <h1> HereBnB</h1>
            <GreetingContainer />
        </header>
        <AuthRoute exact path="/login" component={LoginFormContainer} /> 
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <Route exact path="/" component={SearchContainer} /> */}
    </div>
)

export default App; 