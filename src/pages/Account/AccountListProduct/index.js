import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import AccordingToggle from './../../../commons/components/AccordingToggle';

import {NavLink} from 'react-router-dom';

import {
    actUpdateStatusProductApi, 
    actRemoveProductApi
} from './../../../commons/modules/AccountInfo/actions'


class AccountListProduct extends Component {
    

    onHandleRemoveProduct = productId =>{
        const {title} = this.props;
        const accountId = JSON.parse(localStorage.getItem("accountInfo")).accountId;

        const data = {
            accountId,
            productId,
            typeOfListProduct: title
        }
        this.props.onHandleRemoveProduct(data);
    }

    showTitleList = () =>{
        const {title, listProduct} = this.props;
        const lengthProd = listProduct.length;
        switch(title){
            case "commented":
                return `Sản phẩm đã nhận xét (${lengthProd})`;
            case "save-for-later":
                return `Sản phẩm mua sau (${lengthProd})`;
            case "favorite":
                return `Sản phẩm yêu thích (${lengthProd})`;
            default:
                return `Sản phẩm đã xem (${lengthProd})`;
        }
    }

    renderListProduct = () =>{
        const {listProduct} = this.props;
        if(listProduct.length > 0){
            return listProduct.map((item, index) => {
                return <ProductItem 
                    key = {index} 
                    prodContent = {item}
                    onHandleRemoveProduct = {this.onHandleRemoveProduct}
                />
            })
        }
        
        return (
            <AccordingToggle>
                <div className="accordition-toggle--box empty-icon">
                    <div className = "accordition-span">
                        <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                        <p>Chọn "Mua sau" trong giỏ hàng với sản phẩm bạn muốn mua vào lần khác</p>
                        <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                    </div>
                </div>
            </AccordingToggle>
        )
    }
    
    render() {
        return (
            <div className = "account-content--box">
                <span class="account__title">{this.showTitleList()}</span>
                <div class="account__content">
                    <ul className = "lst-product lst-prod-favorite">
                        {this.renderListProduct()}
                    </ul>
                </div>
                
            </div>
            
        )
    }

    componentDidMount(){
        const {listProduct, title} = this.props;
        if(listProduct){
            const data = {
                accountId: JSON.parse(localStorage.getItem("accountInfo")).accountId,
                listProduct: listProduct,
                typeOfListProduct: title
            }
            this.props.onUpdateStatusProduct(data);
        }
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateStatusProduct: data =>{
            dispatch(actUpdateStatusProductApi(data))
        },
        onHandleRemoveProduct: data =>{
            dispatch(actRemoveProductApi(data))
        }
    }
}

export default connect(null, mapDispatchToProps) (AccountListProduct)
