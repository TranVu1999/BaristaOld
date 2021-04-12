import * as ActionTypes from './constants';
import api from './../../../api';
import * as ApiUrl from './../../../commons/constant/ApiUrl';

export const actGetInfoApi = (data) =>{
    return dispatch =>{
        dispatch( actGetInfoRequest());

        api.get(`/${ApiUrl.USER}/${data}`)
        .then(res =>{                        
            dispatch( actGetInfoSuccess(res.data));
        })
        .catch(err =>{
            dispatch( actGetInfoFailed(err));
        })
    }
}

export const  actUpdateAccountInfoApi = (data) => {
    return dispatch =>{
        dispatch( actGetInfoRequest());

        api.post(`/${ApiUrl.USER}`, data)
        .then(res =>{                        
            dispatch( actGetInfoSuccess(res.data));
        })
        .catch(err =>{
            dispatch( actGetInfoFailed(err));
        })
    }
    
};

const  actGetInfoRequest = () => {
    return {
        type: ActionTypes.GET_GUEST_INFO_REQUEST,
    };
};

const  actGetInfoSuccess = (data) => {
    return {
        type: ActionTypes.GET_GUEST_INFO_SUCCESS,
        payload: data,
    };
};

const  actGetInfoFailed = (err) => {
    return {
        type: ActionTypes.GET_GUEST_INFO_FAILED,
        payload: err,
    };
};


export const  actUpdateAccountInfo = (data) => {
    let action =  {
        type: ActionTypes.UPDATE_INFO,
        payload: data,
    };
    return dispatch =>{
        dispatch(action);
    }
    
};


