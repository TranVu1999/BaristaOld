import * as ActionTypes from "./constants";
import * as cartModel from "./models";

let initialState = {
  isOpen: false,
  data: [],
  removed: [],
  errors: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_CART: {
      let data = [...state.data];
      data = cartModel.addCart(data, action.payload);
      state.data = data;
      state.isOpen = true;
      return { ...state };
    }
    case ActionTypes.REMOVE_PRODUCT_CART: {
      let data = [...state.data];
      let removed = [...state.removed];

      removed.push(cartModel.getCartItem(data, action.payload));
      data = cartModel.removeItem(data, action.payload);

      return { ...state, data, removed };
    }
    case ActionTypes.UNDO_PRODUCT_CART: {
      let data = [...state.data];
      let removed = [...state.removed];

      data.push(cartModel.getCartItem(removed, action.payload));
      removed = cartModel.removeItem(removed, action.payload);

      return { ...state, data, removed };
    }

    case ActionTypes.UPDATE_PRODUCT_CART: {
      let arrayData = [...state.data];

        if (action.payload.number === 1) {
            let indexProduct = arrayData.findIndex((item, index) => {
            return item.prodId === action.payload.prodId;
            });
            arrayData[indexProduct].amount++;
        }else {
            let indexProduct = arrayData.findIndex((item, index) => {
                return item.prodId === action.payload.prodId;
            });
            arrayData[indexProduct].amount--;
        }

        console.log("arrayData", arrayData)
      return { ...state, data: arrayData };
    }

    case ActionTypes.CLOSE_CART: {
      state.isOpen = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default cartReducer;
