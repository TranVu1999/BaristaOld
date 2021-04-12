import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class InvoiceItem extends Component {
    
    
    render() {
        return (
            <>
                <div className = "d-table-row invoice--item">
                    <div className = "invoice-id">
                        <NavLink to = "">351077915</NavLink>
                    </div>
                    <div className = "invoice-date">03/01/2021</div>
                    <div className = "invoice-prod">Chicken Soup For The Soul, Chicken Soup For The Soul, Chicken Soup For The SoulChicken Soup For The Soul Chicken Soup For The SoulChicken Soup For The Soul</div>
                    <div className = "invoice-total">62.000 ₫</div>
                    <div className = "invoice-status">Giao hàng thành công</div>
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
