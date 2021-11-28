import {
    GET_LISTING_LOADING,
    GET_LISTING_SUCCESS,
    GET_LISTING_FAIL
} from './types';

const initialState = {};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_LISTING_LOADING:
            return {
                ...state,
                status: GET_LISTING_LOADING
            }
        case GET_LISTING_SUCCESS:
            return {
                ...state,
                status: GET_LISTING_SUCCESS,
                listings: payload
            }
        case GET_LISTING_FAIL:
            return {
                ...state,
                status: GET_LISTING_FAIL
            }
        default:
            return state
    }
}
