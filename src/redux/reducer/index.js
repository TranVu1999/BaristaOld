import {combineReducers} from 'redux';
import formLoginReducer from './../../features/FormLogin/modules/reducer';
import formAccountInfoReducer from './../../features/FormAccountInfo/modules/reducer';
import accountListProductReducer from './../../features/AccountListProduct/modules/reducer';
import productDetailReducer from './../../pages/ProductDetail/modules/reducer';
import cartReducer from './../../commons/modules/Cart/reducer';
import loginReducer from './../../commons/modules/Login/reducer';
import keywordReducer from './../../commons/modules/Keyword/reducer';
import shopReducer from './../../commons/modules/Shop/reducer';
import urlReducer from './../../commons/modules/Url/reducer';
import accountInfoReducer from './../../commons/modules/AccountInfo/reducer';
import keySearchReducer from './../../commons/modules/KeySearch/reducer';
import notifyReducer from './../../commons/modules/Notify/reducer';
import quickViewReducer from './../../commons/modules/QuickView/reducer';

const rootReducer = combineReducers({
    formLoginReducer,
    formAccountInfoReducer,
    accountListProductReducer,
    productDetailReducer,
    cartReducer,
    loginReducer, 
    keywordReducer,
    shopReducer,
    urlReducer,
    accountInfoReducer,
    keySearchReducer, 
    notifyReducer,
    quickViewReducer
});

export default rootReducer;