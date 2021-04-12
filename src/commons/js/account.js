export const getAccountFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem("accountInfo"))
}