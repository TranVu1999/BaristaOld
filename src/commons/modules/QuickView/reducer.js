import * as ActionTypes from "./constants";

let initialState = {
  isOpenQuickView: false,
  indexActiveImage: 0,
  productContent: {}
};

const quickViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_QUICKVIEW: {
      state.isOpenQuickView = true;
      state.indexActiveImage = 0;
      state.productContent = action.payload;
      return { ...state };
    }
    case ActionTypes.CLOSE_QUICKVIEW: {
      state.isOpenQuickView = false;
      return { ...state };
    }
    case ActionTypes.CHANGE_IMAGE: {
      state.indexActiveImage = action.payload;
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default quickViewReducer;
