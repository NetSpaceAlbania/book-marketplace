import React, { useEffect } from 'react';
import Navbar from '../components/Nav/NavBM';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../redux/actions/auth';

const Layout = (props) => {

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;
