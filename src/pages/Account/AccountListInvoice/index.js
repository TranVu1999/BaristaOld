import React, { Component } from 'react';
import './style.scss';
import InvoiceItem from './InvoiceItem';
import AccordingToggle from './../../../commons/components/AccordingToggle';

import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {actGetListInvoiceApi} from './../../../commons/modules/AccountInfo/actions';

class AccountListInvoice extends Component {
    renderListInvoice = () =>{
        const {listInvoice} = this.props;
        if(listInvoice){
            return listInvoice.map((item, index) =>{
                return <InvoiceItem 
                key = {index} 
                invoiceContent = {item}
                
            />
            })
        }

        return (
            <AccordingToggle>
                <div className="accordition-toggle--box empty-icon">
                    <div className = "accordition-span">
                        <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                        <p>Bạn chưa có thông báo</p>
                        <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                    </div>
                </div>
            </AccordingToggle>
        )
    }
    render() {
        return (
            <div className="account-content--box">
                <span className="account__title">Đơn hàng của tôi</span>
                <div className="account__content">
                    <div className="d-table lst-invoice">
                        <div className = "d-table-row lst-invoice--header">
                            <div className = "invoice-id">Mã đơn hàng</div>
                            <div className = "invoice-date">Ngày mua</div>
                            <div className = "invoice-prod">Sản phẩm</div>
                            <div className = "invoice-total">Tổng tiền</div>
                            <div className = "invoice-status">Trạng thái đơn hàng</div>
                        </div>
                        <div className = "lst-invoice--body">
                            {this.renderListInvoice()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount(){
        const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        if(accountInfo){
            this.props.onGetListInvoice(accountInfo.accountId);
        }
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onGetListInvoice: accountId =>{
            dispatch(actGetListInvoiceApi(accountId))
        }
    }
}

const mapStateToProps = state =>{
    return {
        listInvoice : state.accountInfoReducer.accountInfo.listInvoice
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListInvoice)
