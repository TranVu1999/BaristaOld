import * as ActionTypes from './constants';

let initialState = {
    data: {
        productId: 'prod01',
        productTitle: '',
        productAlias: '',
        productDetail: '',
        productPrice: 0,
        productPromo: 0,
        productRating: 0,
        prodReview: [],
        productShortDesc: '',
        prodCateTitle: '',
        productSLU: '',
        prodInfomation: {},
        productImage: {
            productAvatar: '',
            productMoreImage: []
        }
        
    },
    errors: null
};

const productDetailReducer = (state = initialState, action) =>{
    switch (action.type){

        case ActionTypes.PRODUCTDETAIL_SUCCESS:
            state.data = action.payload;
            state.errors = null;
            return { ...state };

        case ActionTypes.PRODUCTDETAIL_FAILED:
            state.loading = false;
            state.data = null;
            state.errors = action.payload;
            return { ...state };

        case ActionTypes.UPDATE_LIST_COMMENT:
            const {reviewInfo} = action.payload;
            const dataComment = {
                accountId: reviewInfo.accountId,
                time: reviewInfo.time,
                rating: reviewInfo.rating,
                content: reviewInfo.content,
                userName: "Trần Lê Anh Vũ"
            }
            let lstComment = [...state.data.prodReview];
            lstComment.push(dataComment);
            state.data.prodReview = [...lstComment]
            console.log("update", state.data.prodReview);

            return { ...state };

        case ActionTypes.PRODUCTDETAIL_CHANGE_PRODUCTAVATAR:
            state.data = {
                ...state.data,
                productImage: {
                    ...state.data.productImage,
                    productAvatar: action.payload
                }
            };
            return {...state};

        default: 
            return {...state};
    }
}

export default productDetailReducer;