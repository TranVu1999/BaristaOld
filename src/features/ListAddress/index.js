import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class ListAddress extends Component {
    render() {
        return (
            <div className="account-content--box">
                <span className="account__title">Địa chỉ của tôi</span>
                <div className="account__content">
                    <div className="account__address">
                    <div className="add-address">
                        <NavLink
                            to="/my-account/add-address"
                            className="d-flex-start"
                        >
                            <span aria-hidden="true" className="icon_plus" /> Thêm địa chỉ mới
                        </NavLink>
                        
                    </div>
                    <ul className="lst-address">
                        <li className="item">
                        <div className="info">
                            <div className="name">
                            Trần Lê Anh Vũ
                            <span className="notify">
                                <span aria-hidden="true" className="icon_check_alt2" />
                                <span>Địa chỉ mặc định</span>
                            </span>
                            </div>
                            <div className="address">
                            <span>Địa chỉ: </span>
                            156b, Lã Xuân Oai, Phường Tăng Nhơn Phú A, Quận 9, Hồ Chí Minh
                            </div>
                            <div className="phone">
                            <span>Điện thoại: </span>
                            0377670509
                            </div>
                            <div className="respon-info">
                            Trần Lê Anh Vũ - 0377670509
                            </div>
                        </div>
                        <div className="action">
                            <NavLink 
                                to = "/my-account/update-address"
                                className="edit"
                            >
                                Chỉnh sửa
                            </NavLink>
                        </div>
                        </li>
                        <li className="item">
                        <div className="info">
                            <div className="name">
                            Trần Lê Anh Vũ
                            </div>
                            <div className="address">
                            <span>Địa chỉ: </span>
                            156b, Lã Xuân Oai, Phường Tăng Nhơn Phú A, Quận 9, Hồ Chí Minh
                            </div>
                            <div className="phone">
                            <span>Điện thoại: </span>
                            0377670509
                            </div>
                            <div className="respon-info">
                            Trần Lê Anh Vũ - 0377670509
                            </div>
                        </div>
                        <div className="action">
                            <NavLink 
                                to = "/my-account/update-address"
                                className="edit"
                            >
                                Chỉnh sửa
                            </NavLink>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        )
    }
}
