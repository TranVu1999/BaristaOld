import * as ActionTypes from './constants';
import api from './../../../api';
import * as ApiUrl from './../../../commons/constant/ApiUrl';

export const actLoginApi = (data) =>{
    console.log(data)
    return dispatch =>{
        dispatch(actLoginRequest());

        api.post(`/${ApiUrl.ACCOUNT}/login`, data)
        .then(res =>{

            let resultLogin = res.data;

            if(resultLogin.flag > 0){
                localStorage.setItem('accountInfo', JSON.stringify(resultLogin.accountInfo));
            }
                        
            dispatch(actLoginSuccess(res.data));
        })
        .catch(err =>{
            dispatch(actLoginFailed(err));
        })
    }
}

const actLoginRequest = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
    };
};

const actLoginSuccess = (data) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data,
    };
};

const actLoginFailed = (err) => {
    return {
        type: ActionTypes.LOGIN_FAILED,
        payload: err,
    };
};