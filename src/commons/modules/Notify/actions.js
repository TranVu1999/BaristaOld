import * as ActionTypes from './constants';

export const actChangeNotify = (data) =>{
    return {
        type: ActionTypes.CHANGE_NOTIFY,
        payload: data
    }
}
