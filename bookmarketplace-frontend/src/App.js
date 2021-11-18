import React from 'react';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import ResetPasswordConfirm from './screens/ResetPasswordConfirm';
import Activate from './screens/Activate';
import DetailedListings from './screens/DetailedListings';
import CreateListings from './screens/CreateListings';
import MyListings from './screens/MyListings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './hocs/Layout';

export function NotFound(){
  return (<h1>404 Not Found</h1>);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/detailedlisting/:bookId" element={<DetailedListings/>}/>
            <Route exact path="/mylistings" element={<MyListings/>}/>
            <Route exact path="/createlistings" element={<CreateListings/>}/>
            <Route exact path="/signin" element={<SignIn/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/resetpassword" element={<ResetPassword/>}/>
            <Route exact path="/resetpassword/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
            <Route exact path="/activate/:uid/:token" element={<Activate/>} />
            <Route exact path='*' element={<NotFound/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
