import * as ActionTypes from './constants';

let initialState = {
    key: [],
    accountId: 'none'
};

const keySearchReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.ADD_KEY:
            state.key.push(action.payload.keySearch)
            state.accountId = action.payload.accountId;
            console.log("state", state)
            return {...state};
        default: 
            return {...state};
    }
}

export default keySearchReducer;