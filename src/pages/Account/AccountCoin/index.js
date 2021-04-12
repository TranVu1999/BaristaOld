import React, { Component } from 'react';
import './style.scss';

export default class AccountCoin extends Component {
    render() {
        return (
           <div className="account__container--widget">
                <span className="account__title">Quản lý xu của tôi</span>

                <div className="bg-white account__content">
                    <div className="account__coin">
                        <div className="coin-number">
                            <div className="d-flex-center">
                                <img src="https://salt.tikicdn.com/desktop/img/account/tiki-xu.svg" alt="coin" />
                                <span className="big">883</span>
                            </div>
                            <p>Bạn có <span>883</span> Coffee Xu trong tài khoản của bạn.</p>
                        </div>

                        <div className="coin-history">
                            <h6>Lịch sử Coffee xu</h6>
                            <div className="coin-table">
                                <div className="coin-table-head">
                                    <div className="coin-table-row">
                                        <div className="coin-coffee">Coffee Xu</div>
                                        <div className="coin-time">Thời gian</div>
                                        <div className="coin-content">Nội dung</div>
                                        <div className="coin-status">Trạng thái</div>
                                    </div>
                                </div>
                                <div className="coin-table-body">
                                    <div className="coin-table-row">
                                        <div className="coin-coffee">+255</div>
                                        <div className="coin-time">25.03.2019</div>
                                        <div className="coin-content">Bạn được hoàn tiền vào tài khoản Tiki Xu (+ 255 Xu) khi mua hàng trên App, Mã đơn hàng: 573541779</div>
                                        <div className="coin-status">Đã chấp nhận</div>
                                    </div>

                                    <div className="coin-table-row">
                                        <div className="coin-coffee">+93</div>
                                        <div className="coin-time">23.10.2018</div>
                                        <div className="coin-content">Bạn được hoàn tiền vào tài khoản Tiki Xu (+ 93 Xu) khi mua hàng trên App, Mã đơn hàng: 323864097</div>
                                        <div className="coin-status">Đã chấp nhận</div>
                                    </div>

                                    <div className="coin-table-row">
                                        <div className="coin-coffee">+232</div>
                                        <div className="coin-time">23.10.2018</div>
                                        <div className="coin-content">Tặng bạn 232 Tiki Xu dùng để giảm giá khi thanh toán. Thời hạn sử dụng 15 ngày</div>
                                        <div className="coin-status">Đã chấp nhận</div>
                                    </div>

                                    <div className="coin-table-row">
                                        <div className="coin-coffee">+57</div>
                                        <div className="coin-time">23.10.2018</div>
                                        <div className="coin-content">Tặng bạn 57 Tiki Xu dùng để giảm giá khi thanh toán. Thời hạn sử dụng 15 ngày</div>
                                        <div className="coin-status">Đã chấp nhận</div>
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
