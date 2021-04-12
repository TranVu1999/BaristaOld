import * as ActionTypes from './constants';
import api from '../../../api';
import axios from 'axios';

export const actProductDetailApi = (prodAlias) =>{
    return dispatch =>{        
        const reqProductDetail = api.get(`/product/${prodAlias}`);

        axios.all([reqProductDetail])
        .then(
            axios.spread((...responses) =>{
                const resProductDetail = responses[0];
                dispatch(actProductDetailSuccess(resProductDetail.data))
            })
        )
        .catch(err =>{
            dispatch(actProductDetailFailed(err))
        })
    }
}

export const actAddCommentlApi = (data) =>{
    return dispatch =>{        
        const reqcomment = api.post(`/product/comment`, data);

        axios.all([reqcomment])
        .then(
            axios.spread((...responses) =>{
                const resComment = responses[0].data;
                console.log("commented", resComment);
                if(resComment === "ok"){
                    dispatch(actUpdateListComment(data))
                }
            })
        )
        .catch(err =>{
            dispatch(actProductDetailFailed(err))
        })
    }
}

export const actDropBylApi = (data) =>{
    const reqDropby = api.post(`/product/dropby`, data);

    axios.all([reqDropby])
    .then(
        axios.spread((...responses) =>{
        })
    )
    .catch(err =>{
        
    })
}

const actProductDetailRequest = () => {
    return {
        type: ActionTypes.PRODUCTDETAIL_REQUEST,
    };
};

const actProductDetailSuccess = (data) => {
    return {
        type: ActionTypes.PRODUCTDETAIL_SUCCESS,
        payload: data,
    };
};

const actProductDetailFailed = (err) => {
    return {
        type: ActionTypes.PRODUCTDETAIL_FAILED,
        payload: err,
    };
};

const actUpdateListComment = (data) =>{
    return {
        type: ActionTypes.UPDATE_LIST_COMMENT,
        payload: data
    }
}

export const actChangeProductAvatar = (data) =>{
    return {
        type: ActionTypes.PRODUCTDETAIL_CHANGE_PRODUCTAVATAR,
        payload: data
    }
}