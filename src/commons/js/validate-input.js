export const isEmail = (str) =>{
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(str).toLowerCase());
}

export const isPassword = (str) =>{
    // one special character
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(str);
}

export const isEmpty = (str) =>{
    return str === '';
}


export const isFullname= (str) =>{
    const pattern = /[a-zA-Z]/;
    return pattern.test(str);
}

export const isPhoneNumber= (str) =>{
    const pattern = /((09|03|07|08|05)+([0-9]{8})\b)/;
    return pattern.test(str);
}


