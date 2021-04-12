import * as ActionTypes from './constants';

let initialState = {
    data: {
        listKeyword: []
    },
    errors: null
};

const keywordReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.GET_LIST_KEYWORD_REQUEST:
            state.data = {
                listKeyword: []
            };
            state.errors = null;
            return { ...state };

        case ActionTypes.GET_LIST_KEYWORD_SUCCESS:
            let listKeyword = action.payload;
            state.data.listKeyword = [...listKeyword];
            state.errors = null;
            return { ...state};    

        case ActionTypes.GET_LIST_KEYWORD_FAILED:
            state.data = {
                listKeyword: []
            };
            state.errors = action.payload;
            return { ...state };

        default: 
            return {...state};
    }
}

export default keywordReducer;