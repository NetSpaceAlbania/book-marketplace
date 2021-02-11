import React from 'react';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import ResetPasswordConfirm from './screens/ResetPasswordConfirm';
import Activate from './screens/Activate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/resetpassword" component={ResetPassword}/>
            <Route exact path="/resetpassword/confirm/:uid/:token" component={ResetPasswordConfirm}/>
            <Route exact path="/activate/:uid/:token" component={Activate} />
            <Route exact path='*'>
              <h1>404 Not Found</h1>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
