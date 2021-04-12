export const addCart = (lstCart, prod) =>{
    let flag = false;
    for(let item of lstCart){
        if(item.prodId === prod.prodId){
            item.amount += prod.amount;
            flag = true;
            break;
        }
    }

    if(!flag){
        lstCart.push(prod);
    }

    return [...lstCart]
}

export const removeItem = (lstCart, prodId) =>{
    let index = findCartItem(lstCart, prodId);
    if(index !== -1){
        lstCart.splice(index, 1);
    }
    
    return [...lstCart]
}

export const updateItem = (lstCart, prodInfo) =>{
    const {prodId, number} = prodInfo;
    let index = findCartItem(lstCart, prodId);
    if(index !== -1){
        lstCart[index].amount += number;
    }
    return [...lstCart]
}

export const getCartItem = (lstCart, prodId) =>{
    for(let index in lstCart){
        if(lstCart[index].prodId === prodId){
            return {...lstCart[index]};
        }
    }
}

const findCartItem = (lstCart, prodId) =>{
    for(let index in lstCart){
        if(lstCart[index].prodId === prodId){
            return index;
        }
    }
    return -1;
}