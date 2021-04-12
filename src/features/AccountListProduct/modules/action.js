import * as ActionTypes from './constants';
import api from './../../../api';
import * as ApiUrl from './../../../commons/constant/ApiUrl';

export const actGetListProductApi = (data) =>{
    return dispatch =>{
        dispatch( actGetListProductRequest());

        api.post(`/${ApiUrl.ACCOUNT}/getProduct`, data)
        .then(res =>{    
            console.log("account lst product", res.data);                    
            dispatch( actGetListProductSuccess(res.data));
        })
        .catch(err =>{
            dispatch( actGetListProductFailed(err));
        })
    }
}

const  actGetListProductRequest = () => {
    return {
        type: ActionTypes.GET_ACCOUNT_PRODUCT_REQUEST,
    };
};

const  actGetListProductSuccess = (data) => {
    return {
        type: ActionTypes.GET_ACCOUNT_PRODUCT_SUCCESS,
        payload: data,
    };
};

const  actGetListProductFailed = (err) => {
    return {
        type: ActionTypes.GET_ACCOUNT_PRODUCT_FAILED,
        payload: err,
    };
};



