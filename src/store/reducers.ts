import { combineReducers } from 'redux';

const initialState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case "aaa": {
        return { ...state, aaa: "aaa" };
    }
    default:
        return { ...state };
    }
}

export default combineReducers({
    xz: reducer,
});
