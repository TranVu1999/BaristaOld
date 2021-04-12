import * as ActionTypes from './constants';

let initialState = {
    loading: false,
    data: null,
    errors: null
};

const formAccountInfoReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.GET_GUEST_INFO_REQUEST:
            state.loading = true;
            state.data = null;
            state.errors = null;
            return { ...state };

        case ActionTypes.GET_GUEST_INFO_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.errors = null;
            return { ...state };

        case ActionTypes.UPDATE_INFO:
            state.data = action.payload;
            return { ...state };

        default: 
            return {...state};
    }
}

export default formAccountInfoReducer;