import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case HYDRATE: {
        return {
            ...state,
            ...action.payload.xz,
        };
    }
    case "aaa": {
        return { ...state, aaa: action.payload };
    }
    default:
        return { ...state };
    }
}

export default combineReducers({
    xz: reducer,
});
