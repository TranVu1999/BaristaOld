import * as ActionTypes from "./constants";
import * as Notify from './../../constant/Notify';

let initialState = {
  typeNotify: 0,
  notify: ""
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NOTIFY: {
      state.typeNotify = action.payload.typeNotify;

      if(action.payload.typeNotify === 1){
        state.notify = action.payload.notifyContent;
      }else if(action.payload.typeNotify === -1){
        state.notify = Notify.FAIL_NOTIFY;
      }else{
        state.notify = "";
      }

      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default notifyReducer;
