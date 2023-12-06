import data from './data/dogs';

import { FETCH_START } from '../actions';

const initialState = {
    dog: data,
    loading: false,
    err:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error:""
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ""
            }
        default:
            return(state);
    }
}

export default reducer;