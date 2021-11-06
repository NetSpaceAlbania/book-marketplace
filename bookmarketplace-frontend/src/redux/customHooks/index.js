import store from '../store'

export const useToken = () => {
    return store.getState().auth.access;
}