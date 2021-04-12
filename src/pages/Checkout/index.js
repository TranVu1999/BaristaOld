import React, { Component } from 'react';
import MainPage from './../../commons/components/MainPage';
import Breadcrumb from './../../commons/components/Breadcrumb';
import AccordingToggle from '../../commons/components/AccordingToggle';
import ConfirmInfo from './ConfirmInfo';
import ConfirmInvoice from './ConfirmInvoice';
import Popup from '../../commons/components/Popup';

import {NavLink} from 'react-router-dom';

import api from './../../api';
import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class CheckoutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            discountCost: 0,
            submitted: false,
            discount: {
                error: "",
                code: "",
                cost: 0
            },
            userInfo: {
                userCode: "",
                email: "",
                phoneNumber: "",
                fullname: "",
                address: {
                    company: "",
                    province: "",
                    district: "",
                    wards: "",
                    houseNumber: "",
                    phoneNumber:""
                }
            }
        }
    }

    onHandleChange = (event) =>{
        const {name, value} = event.target;
        
        if(name === "code"){
            this.setState({
                ...this.state,
                discount: {
                    ...this.state.discount,
                    code: value
                }
            })
        }else if(name === "fullname"){
            this.setState({
                ...this.state,
                userInfo: {
                    ...this.state.userInfo,
                    [name]: value
                }
            })
        }else{
            this.setState({
                ...this.state,
                userInfo: {
                    ...this.state.userInfo,
                    address: {
                        ...this.state.userInfo.address,
                        [name]: value
                    }
                }
            })
        }

    }

    onCheckDiscountCode = (event) =>{
        event.preventDefault();
        const {code} = this.state.discount;
        const subTotalCart = this.getSubTotalCart();

        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            api.get(`/account/get-discount/${accountInfo.accountId}/${code}`)
            .then(res =>{
                if(res.data){
                    if(subTotalCart < res.data.cost){
                        this.setState({
                            ...this.state,
                            discount: {
                                error: "The value of this code is greater than the value of the invoice.",
                                code: "",
                                cost: 0
                            }
                        })
                            
                    }else{
                        this.setState({
                            discount: {
                                error: "",
                                ...res.data
                            },
                            userInfo: {
                                ...this.state.userInfo,
                                userCode: res.data.code
                            }
                        })
                    }
                    
                }else{
                    this.setState({
                        ...this.state,
                        discount: {
                            error: "This code is not used.",
                            code: "",
                            cost: 0
                        }
                    })
                }
                
            })
            .catch(err =>{
                console.log("err", err)
            })
        }
        
    }

    onHandleGetDiscount = (cost) =>{
        this.setState({
            discountCost: cost
        })
    }

    getSubTotalCart = () =>{
        const {dataCart} = this.props;
        let cost = 0;
        for(let item of dataCart){
            cost += item.prodPrice * item.amount;
        }
        return cost;
    }

    onHandleOpenLoginForm = (isOpen) =>{
        this.setState({
            ...this.state,
            submitted: false,
            discount: {
                error: "",
                code: "",
                cost: 0
            }
        })
    }

    onSubmitInvoice = () =>{
        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            const {discount, userInfo} = this.state;
            const total = this.getSubTotalCart();

            const listProduct = this.props.dataCart.map(item =>{
                return {
                    productId: item.prodId,
                    amount: item.amount
                }
            })

            const d = new Date();
            const data = {
                email: accountInfo.userEmail,
                discount: discount.code ? discount.code : "none",
                accountId: accountInfo.accountId,
                total: total - discount.cost,
                address: {...userInfo.address},
                receivedName: userInfo.fullname, 
                phone: userInfo.address.phoneNumber,
                listProduct,
                createDate: {
                    date: d.getDate(),
                    month: d.getMonth() + 1,
                    year: d.getFullYear()
                }
            }

            api.post(`http://localhost:9000/invoice/submit`, data)
            .then(res =>{
                if(res.data){
                    this.setState({
                        ...this.state,
                        submitted: true
                    })
                }
                
            })
            .catch(err =>{
                console.log("err", err)
            })
        }
    }

    render() {
        const {dataCart} = this.props;
        const subTotalCart = this.getSubTotalCart();
        const {discountCost, userInfo, discount, submitted} = this.state;

        return (
            <>
                <MainPage>
                    <Breadcrumb mainTitle = "Checkout"/>
                    
                    <div class="cf-container checkout-page">
                        <AccordingToggle>
                            <div class="accordition-toggle">
                                <input type="checkbox" id="1"/>
                                <div class="accordition-toggle--box">
                                    <div class="accordition-span">
                                        Have a coupon? 
                                        <label for="1"> Click here to enter your code</label>
                                    </div>
                                    <div class="accordition-detail">
                                        <span>If you have a coupon code, please apply it below.</span>
                                        <form 
                                            onSubmit = {this.onCheckDiscountCode}
                                        >
                                            <div class="form-group">
                                                <input 
                                                    type="text" 
                                                    class="input-control" 
                                                    placeholder="Coupon Code"
                                                    name="code"
                                                    value={discount.code}
                                                    onChange={this.onHandleChange}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <button class="coffee-btn">Apply Coupon</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </AccordingToggle>

                        <ConfirmInfo 
                            onHandleGetDiscount = {this.onHandleGetDiscount}
                            onHandleChange = {this.onHandleChange}
                            userInfo = {userInfo}
                        />
                        <ConfirmInvoice 
                            dataCart= {dataCart}
                            subTotalCart = {subTotalCart}
                            discountCost = {discountCost}
                        />
                        <div class="confirm-action">
                            {dataCart.length > 0 ? (
                                <button 
                                    class="coffee-btn"
                                    onClick = {this.onSubmitInvoice}
                                >Place Order</button>
                            ):(
                                <NavLink 
                                    className="return-to-shop" 
                                    to="/shop"
                                >Return to shop</NavLink>
                            )}
                            
                            
                        </div>
                    </div>
                    
                    
                </MainPage>
                <Popup 
                    popupTitle="Notify" isOpen = {discount.error !== '' || submitted}
                    onHandleOpenLoginForm = {this.onHandleOpenLoginForm}
                >
                    <AccordingToggle>
                        <div className="accordition-toggle--box">
                            <div className = "accordition-span">{
                               submitted ? "Your invoice is submitted." : discount.error
                            }</div>
                        </div>
                    </AccordingToggle>
                </Popup>
            </>
        )
    }

    componentDidMount(){
        
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })

        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            api.get(`account/get-user/${accountInfo.accountId}`)
            .then(res =>{
                let address = {
                    company: "",
                    province: "",
                    district: "",
                    wards: "",
                    houseNumber: "",
                    phoneNumber:""
                };
                for(let addressItem of res.data.address){
                    if(addressItem.isDefault){
                        address = {...addressItem};
                        break;
                    }
                }
                this.setState({
                    ...this.setState,
                    userInfo: {
                        ...res.data,
                        address
                    }
                })
            })
            .catch(err =>{
                console.log("err", err)
            })
        }
    }
}

const mapStateToProps = state =>{
    return {
        dataCart: state.cartReducer.data
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
