import * as ActionTypes from './constants';
import api from '../../../api';

export const actGetListKeywordApi = (data) =>{
    return dispatch =>{
        dispatch(actGetListKeywordRequest());
        api.get(`/product/test-search/${data.keyword}&${data.accountId}`)
        .then(res =>{
            dispatch(actGetListKeywordSuccess(res.data));
        })
        .catch(err =>{
            dispatch(actGetListKeywordFailed(err));
        })
    }
}

const actGetListKeywordRequest = () => {
    return {
        type: ActionTypes.GET_LIST_KEYWORD_REQUEST,
    };
};

const actGetListKeywordSuccess = (data) => {
    return {
        type: ActionTypes.GET_LIST_KEYWORD_SUCCESS,
        payload: data,
    };
};

const actGetListKeywordFailed = (err) => {
    return {
        type: ActionTypes.GET_LIST_KEYWORD_FAILED,
        payload: err,
    };
};