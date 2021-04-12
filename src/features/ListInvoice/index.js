import React, { Component } from 'react';
import InvoiceItem from './InvoiceItem';

import './style.scss';

export default class ListInvoice extends Component {
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
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                            <InvoiceItem/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        )
    }
}
