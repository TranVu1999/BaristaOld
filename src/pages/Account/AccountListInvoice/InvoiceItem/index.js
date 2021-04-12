import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class InvoiceItem extends Component {
    renderInvoiceStatus = (status) =>{
        switch(status){
            default: 
                return "Giao hàng thành công"
        }
    }

    renderDate = createDate =>{
        let date = createDate.date < 10 ? "0" + createDate.date : createDate.date;
        let month = createDate.month < 10 ? "0" + createDate.month : createDate.month;

        return date + '.' + month + '.' + createDate.year;
    }

    renderProductTitle = (listProduct) =>{
        let str = '';
        let lengthProd = listProduct.length;
        if(lengthProd > 3){
            for(let i = 0; i < 3; i++){
                str += listProduct[i].productTitle + ', ';
            }

            str += `... và ${lengthProd - 3} sản phẩm nữa`;
        }else{
            for(let i = 0; i < lengthProd; i++){
                str += listProduct[i].productTitle + ', ';
            }

            str.slice(0, str.length - 2);
        }

        return str;
        
    }

    render() {
        const {invoiceContent} = this.props;
        console.log("invoiceContent", invoiceContent)

        return (
            <>
                <div className = "d-table-row invoice--item">
                    <div className = "invoice-id">
                        <NavLink 
                            to = {`/my-account/invoice-detail/${invoiceContent.invoiceId}`}
                            
                        >{invoiceContent.invoiceId}</NavLink>
                    </div>
                    <div className = "invoice-date">{this.renderDate(invoiceContent.createDate)}</div>
                    <div className = "invoice-prod">{this.renderProductTitle(invoiceContent.listProduct)}</div>
                    <div className = "invoice-total">{invoiceContent.total} ₫</div>
                    <div className = "invoice-status">
                        {this.renderInvoiceStatus(invoiceContent.status)}
                    </div>
                </div>

                <a href="/#" className="invoice--item box">
                    <div className="invoice--text">
                        <p className="invoice--title">Chicken Soup For The Soul - Tìm lại giá trị cuộc sống</p>
                        <p><span>Mã đơn hàng: </span> 351077915</p>
                        <p><span>Ngày đặt hàng: </span> 03/01/2021</p>
                        <p><span>Trạng thái: </span> Giao hàng thành công</p>
                    </div>
                    <div className="invoice--status">
                        <div className="fs1" aria-hidden="true" data-icon=""></div>
                    </div>
                </a>
            </>
        )
    }
}
