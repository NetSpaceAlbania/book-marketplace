import axios from 'axios';
import {
    GET_LISTING_LOADING,
    GET_LISTING_SUCCESS,
    GET_LISTING_FAIL
} from './types';

import url from '../constants/environment';
import { useToken } from '../customHooks';


let config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const getListings = () => async dispatch => {

    let token = useToken();

    config.headers = {
        ...config.headers, 
        'Authorization': `JWT ${token}`
    }
    console.log(config);

    const body = JSON.stringify({}); 

    dispatch({
        type: GET_LISTING_LOADING,
    });

    try {
        const res = await axios.get(`${url}/api/book-list/`, config);

        console.log("success");

        dispatch({
            type: GET_LISTING_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_LISTING_FAIL
        });
    }
};