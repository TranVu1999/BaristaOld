import * as ActionTypes from './constants';

export const actUpdateUrl = (data) =>{
    return {
        type: ActionTypes.UPDATE_URL,
        payload: data
    }
}