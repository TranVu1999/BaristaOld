import * as ActionTypes from './constants';

let initialState = {
    accountInfo: {
        code: {
            code: '',
            time: 0
        },
        birthday: {
            date: 1,
            month: 1,
            year: 1990
        },
        userEmail: "admin@gmail.com",
        listInvoice: [],
        accountProduct: {
            readed: [],
            favorite: [],
            commented: [],
            saveForLate: []
        },
        notify: []
    },
    errors: null
};

const accountInfoReducer = (state = initialState, action) =>{
    let temp = {};
    let listNotify = [];

    switch (action.type){
        case ActionTypes.ACCOUNT_SUCCESS:
            temp = {
                accountInfo: {...state.accountInfo}
            };
            for(let key in action.payload){
                temp.accountInfo[key] = action.payload[key];
            };
            state = {...temp};
            return { ...state};

        case ActionTypes.ACCOUNT_UPDATE_INFO:
            temp = {
                accountInfo: {...state.accountInfo}
            };
            for(let key in action.payload){
                temp.accountInfo[key] = action.payload[key];
            };
            state = {...temp};
            return { ...state};
            
        case ActionTypes.ACCOUNT_GET_LIST_INVOICE:
            state.accountInfo.listInvoice = action.payload.listInvoice;
            return { ...state};

        case ActionTypes.ACCOUNT_GET_CODE:
            const d = new Date();
            temp = {
                accountInfo: {
                    ...state.accountInfo,
                    code: {
                        code: action.payload,
                        time: d.getTime()
                    }
                }
            };
            state = {...temp};
            return { ...state};            
        
        case ActionTypes.ACCOUNT_FAILED:
            return { ...state };

        case ActionTypes.ACCOUNT_REMOVE_NOTIFY:
            listNotify = [...state.accountInfo.notify].filter(item => item.notifyId !== action.payload);
            state = {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    notify: listNotify
                }
            }
            return { ...state };

        case ActionTypes.ACCOUNT_UPDATE_NOTIFY:
            listNotify = [...state.accountInfo.notify];
            let length = listNotify.length;
            for(let i = 0; i < length; i++){
                if(listNotify[i].notifyId === action.payload){
                    listNotify[i].isNew = false;
                    break;
                }
            }
            
            state = {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    notify: listNotify
                }
            }

            return { ...state };

        default: 
            return {...state};
    }
}

export default accountInfoReducer;