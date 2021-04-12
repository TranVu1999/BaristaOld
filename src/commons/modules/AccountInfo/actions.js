import * as ActionTypes from "./constants";
import api from "./../../../api";
import * as ApiUrl from "./../../constant/ApiUrl";

export const actAccountInfoApi = (data) => {
  return (dispatch) => {
    api
      .get(`/${ApiUrl.ACCOUNT}/${data}`)
      .then((res) => {
        dispatch(actAccountInfoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actUpdateStatusProductApi = (data) => {
  return (dispatch) => {
    api
      .post(`/${ApiUrl.ACCOUNT}/update-product`, data)
      .then((res) => {})
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actRemoveProductApi = (data) => {
  return (dispatch) => {
    api
      .post(`/${ApiUrl.ACCOUNT}/remove-product`, data)
      .then((res) => {})
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actGetListInvoiceApi = (accountId) => {
  return (dispatch) => {
    api
      .get(`/invoice/${accountId}`)
      .then((res) => {
            dispatch(actGetListInvoice({
                listInvoice: res.data
            }))
      })
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actUpdateAccountApi = (data) => {
  return (dispatch) => {
    api
      .post(`/account/update`, data)
      .then((res) => {
        if(res.data !== 'null'){
          // console.log("res.data", res.data)
          dispatch(actUpdateAccount(res.data))
        }
        
      })
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actDetCodeOnEmailApi = (email) => {
  return (dispatch) => {
    api
      .get(`/account/get-code/${email}`)
      .then((res) => {
        if(res.data !== 'null'){
          dispatch(actGetCode(res.data))
        }
        
      })
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actRemoveNotifyApi = (data) => {
  return (dispatch) => {
    api
      .post(`/account/remove-notify`, data)
      .then((res) => {
        if(res.data === 'ok'){
          dispatch(actRemoveNotify(data.notifyId))
        }
        
      })
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};

export const actUpdateNotifyApi = (data) => {
  return (dispatch) => {
    api
      .post(`/account/update-notify`, data)
      .then((res) => {
        if(res.data === 'ok'){
          dispatch(actUpdateNotify(data.notifyId))
        }
        
      })
      .catch((err) => {
        dispatch(actAccountInfoFailed(err));
      });
  };
};


const actUpdateAccount = data =>{
  return{
    type: ActionTypes.ACCOUNT_UPDATE_INFO,
    payload: data
  }
}

const actGetCode = data =>{
  return{
    type: ActionTypes.ACCOUNT_GET_CODE,
    payload: data
  }
}

const actAccountInfoSuccess = (data) => {
  return {
    type: ActionTypes.ACCOUNT_SUCCESS,
    payload: data,
  };
};

const actAccountInfoFailed = (err) => {
  return {
    type: ActionTypes.ACCOUNT_FAILED,
    payload: err,
  };
};

const actGetListInvoice = (data) => {
  return {
    type: ActionTypes.ACCOUNT_GET_LIST_INVOICE,
    payload: data,
  };
};

const actRemoveNotify = (data) => {
  return {
    type: ActionTypes.ACCOUNT_REMOVE_NOTIFY,
    payload: data,
  };
};

const actUpdateNotify = (data) => {
  return {
    type: ActionTypes.ACCOUNT_UPDATE_NOTIFY,
    payload: data,
  };
};
