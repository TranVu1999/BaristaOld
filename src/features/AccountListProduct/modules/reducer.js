import * as ActionTypes from './constants';

let initialState = {
    loading: false,
    data: null,
    errors: null
};

const accountListProductReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.GET_ACCOUNT_PRODUCT_REQUEST:
            state.loading = true;
            state.data = null;
            state.errors = null;
            return { ...state };

        case ActionTypes.GET_ACCOUNT_PRODUCT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.errors = null;
            return { ...state };

        case ActionTypes.GET_ACCOUNT_PRODUCT_FAILED:
            state.loading = false;
            state.data = null;
            state.errors = action.payload;
            return { ...state };

        default: 
            return {...state};
    }
}

export default accountListProductReducer;