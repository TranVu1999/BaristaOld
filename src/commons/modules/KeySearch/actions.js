import * as ActionTypes from './constants';
import api from '../../../api';

export const actAddKey = data =>{
    return{
        type: ActionTypes.ADD_KEY,
        payload: data
    }
}
