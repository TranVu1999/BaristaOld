import * as ActionTypes from './constants';

let initialState = {
    urlInfo: {
        path: '',
        accountTab: ''
    }
};

const urlReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ActionTypes.UPDATE_URL:{
            for(let key in action.payload){
                state.urlInfo[key] = action.payload[key];
            };
            return { ...state};
        }
        
        default: 
            return {...state};
    }
}

export default urlReducer;