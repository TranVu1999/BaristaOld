import * as ActionTypes from './constants';

let initialState = {
    loading: false,
    data: null,
    errors: null
};

const formLoginReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.LOGIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.errors = null;
            return { ...state };

        case ActionTypes.LOGIN_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.errors = null;
            return { ...state };

        case ActionTypes.LOGIN_FAILED:
            state.loading = false;
            state.data = null;
            state.errors = action.payload;
            return { ...state };

        default: 
            return {...state};
    }
}

export default formLoginReducer;