import * as ActionTypes from './constants';
import api from '../../../api';
import * as ApiUrl from '../../constant/ApiUrl';
import axios from 'axios';

export const actInitShopApi = (data) =>{
    return dispatch =>{
        dispatch(actShopRequest());

        const requestShop = api.post(`/${ApiUrl.SHOP}/`, data);
        const requestProductCate = api.get(`/product-category`);

        const requestShopTopRated = api.post(`/${ApiUrl.SHOP}/`, {
            page: 0, sortBy: 1
        });
        
        axios.all([requestShop, requestProductCate, requestShopTopRated])
        .then(
            axios.spread((...responses) =>{
                const resShop = responses[0].data;
                const resProductCate = responses[1].data;
                const resListTopRated =  responses[2].data.lstProduct
                dispatch(actShopSuccess({
                    listProduct : resShop,
                    listProductCate: resProductCate, 
                    listTopRated: resListTopRated
                }));
            })
        )
        .catch(err =>{
            console.log("err", err);
            dispatch(actShopFailed(err));
        })
    }
}

export const actInitListProductApi = (data) =>{
    return dispatch =>{
        const requestShop = api.post(`/${ApiUrl.SHOP}/`, data);
        
        axios.all([requestShop])
        .then(
            axios.spread((...responses) =>{
                const resShop = responses[0].data;
                dispatch({
                    type: ActionTypes.SHOP_INIT_LIST_PRODUCT,
                    payload: resShop
                });
            })
        )
        .catch(err =>{
            dispatch(actShopFailed(err));
        })
    }
}

export const actResetListProduct = (data) =>{
    return dispatch =>{
        dispatch({
            type: ActionTypes.SHOP_RESET_LIST_PRODUCT
        });
    }
}

export const actGetDataShopApi = (data) =>{
    
    return dispatch =>{
        dispatch(actShopRequest());
        const requestShop = api.post(`/${ApiUrl.SHOP}/`, data);
        
        axios.all([requestShop])
        .then(
            axios.spread((...responses) =>{
                const resShop = responses[0].data;
                dispatch(actShopSuccess({
                    listProduct : resShop, 
                    prodCateAlias: 'empty'
                }));
            })
        )
        .catch(err =>{
            dispatch(actShopFailed(err));
        })
    }
}

export const actGetDataShopByKeyApi = (data) =>{
    
    return dispatch =>{
        dispatch(actShopRequest());
        const requestShop = api.get(
            `/product/search/${data.keyword}`
        );
        
        axios.all([requestShop])
        .then(
            axios.spread((...responses) =>{
                const resShop = responses[0].data;
                console.log("data", resShop)
                dispatch(actShopSuccess({
                    listProduct : resShop
                }));
            })
        )
        .catch(err =>{
            dispatch(actShopFailed(err));
        })
    }
}

export const actChoosePage = (data) => {
    return {
        type: ActionTypes.SHOP_CHOOSE_PAGE,
        payload: data,
    };
};

export const actChooseCategory = (data) => {
    return {
        type: ActionTypes.SHOP_CHOOSE_CATEGORY,
        payload: data,
    };
};

export const actChooseSortBy = (data) => {
    return {
        type: ActionTypes.SHOP_CHOOSE_SORTBY,
        payload: data,
    };
};

const actShopRequest = () => {
    return {
        type: ActionTypes.SHOP_REQUEST,
    };
};

const actShopSuccess = (data) => {
    return {
        type: ActionTypes.SHOP_SUCCESS,
        payload: data,
    };
};

const actShopFailed = (err) => {
    return {
        type: ActionTypes.SHOP_FAILED,
        payload: err,
    };
};