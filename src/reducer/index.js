import data from './data/dogs';

const initialState = {
    photo: data,
    loading: true,
    err:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state);
    }
}

export default reducer;