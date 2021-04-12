import React, { Component } from 'react';
import './style.scss';

export default class AccountInvoiceDetail extends Component {
    render() {
        return (
            <div className="account__container--widget">
                <span className="account__title">Chi tiết đơn hàng</span>

                <div className="bg-white account__content">
                    <div className="invoice-detail">
                        <div className="d-flex-between invoice-detail--top">
                            <div>
                                <span className="invoice-id">#351077915</span> - Giao hàng thành công
                            </div>
                            <div>
                                <span className="invoice-date">Ngày đặt hàng: </span>
                            00:41 03/01/2021
                            </div>
                        </div>

                        <div className="d-flex-between align-start invoice-detail__info">
                            <div className="invoide-widget">
                                <h5>Địa chỉ người nhận</h5>
                                <p className="customer-name">Trần Lê Anh Vũ</p>
                                <p>Địa chỉ: 156b, Lã Xuân Oai, Phường Tăng Nhơn Phú A, Quận 9, Hồ Chí Minh, Việt Nam</p>
                                <p>Điện thoại: 0377670509</p>
                            </div>

                            <div className="invoide-widget">
                                <h5>Hình thức giao hàng</h5>
                                <p>Giao vào Chủ nhật, 10/01</p>
                                <p>Phí vận chuyển: 14.000đ</p>
                            </div>

                            <div className="invoide-widget">
                                <h5>Hình thức thanh toán</h5>
                                <p>Thanh toán tiền mặt khi nhận hàng</p>
                            </div>
                        </div>

                        <div className="invoice-detail__content">
                            <div className="d-flex-between invoide-detail__head">
                                <div className="widget widget-product">Sản phẩm</div>
                                <div className="widget widget-price">Giá</div>
                                <div className="widget widget-amount">Số lượng</div>
                                <div className="widget widget-promo">Giảm giá</div>
                                <div className="widget widget-provisional">Tạm tính</div>
                            </div>

                            <div className="invoice-detail__body">
                                <div className="d-flex-between product-item">
                                    <div className="widget widget-product">
                                    <div className="product-thumb">
                                        <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg" alt="product" />
                                    </div>
                                    <div className="product-text">
                                        <h5>
                                        <a href="/#">Paper page</a>
                                        </h5>
                                        <div className="product-rate">
                                        <div className="product-rate--overlay" style={{width: '12%'}} />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        </div>
                                        <div>
                                        <a href="/#" className="btn">Viết nhận xét</a>
                                        <a href="/#" className="btn">Mua lại</a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="widget widget-price">
                                    102.809 ₫
                                    </div>
                                    <div className="widget widget-amount">
                                    1
                                    </div>
                                    <div className="widget widget-promo">
                                    0 ₫
                                    </div>
                                    <div className="widget widget-provisional">
                                    102.809 ₫
                                    </div>
                                </div>
                                <div className="d-flex-between product-item">
                                    <div className="widget widget-product">
                                    <div className="product-thumb">
                                        <img src="./images/prod1.jpg" alt="product" />
                                    </div>
                                    <div className="product-text">
                                        <h5>
                                        <a href="/#">Paper page</a>
                                        </h5>
                                        <div className="product-rate">
                                        <div className="product-rate--overlay" style={{width: '12%'}} />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        <span className="icon icon-star-full" />
                                        </div>
                                        <div>
                                        <a href="/#" className="btn">Viết nhận xét</a>
                                        <a href="/#" className="btn">Mua lại</a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="widget widget-price">
                                    102.809 ₫
                                    </div>
                                    <div className="widget widget-amount">
                                    1
                                    </div>
                                    <div className="widget widget-promo">
                                    0 ₫
                                    </div>
                                    <div className="widget widget-provisional">
                                    102.809 ₫
                                    </div>
                                </div>
                                </div>
                                <div className="invoide-detail__footer">
                                <div className="d-flex-between">
                                    <div className="widget-space" />
                                    <div className="widget-label">
                                    Tạm tính
                                    </div>
                                    <div className="widget-total">
                                    199.659 ₫
                                    </div>
                                </div>
                                <div className="d-flex-between">
                                    <div className="widget-space" />
                                    <div className="widget-label">
                                    Phí vận chuyển
                                    </div>
                                    <div className="widget-total">
                                    0 ₫
                                    </div>
                                </div>
                                <div className="d-flex-between">
                                    <div className="widget-space" />
                                    <div className="widget-label">
                                    Tổng cộng
                                    </div>
                                    <div className="widget-total">
                                    <span className="total-price">199.659 ₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
