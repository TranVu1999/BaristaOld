import React, { Component } from 'react'

export default class AccountUpdateAddress extends Component {
    render() {
        return (
            <div className="account__container--widget">
                <span className="account__title">Chỉnh sửa địa chỉ</span>
                <div className="account__content">
                    <form className="account__info">
                    <div className="form-group">
                        <div className="input-label">Họ tên</div>
                        <div className="input-group">
                        <input type="text" defaultValue="Trần Lê Anh Vũ" placeholder="Nhập họ và tên" /> 
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Công ty</div>
                        <div className="input-group">
                        <input type="text" placeholder="Nhập công ty" /> 
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Số điện thoại</div>
                        <div className="input-group">
                        <input type="text" className="pattern" defaultValue="0123 456 789" />
                        <button>Gởi mã xác thực</button> 
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Tỉnh/Thành phố</div>
                        <div className="input-group">
                        <select>
                            <option value={0}>Chọn Tỉnh/Thành phố</option>
                            <option value={1}>Hồ Chí Minh</option>
                            <option value={2}>Hà Nội</option>
                            <option value={3}>Quảng Ngãi</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Quận huyện</div>
                        <div className="input-group">
                        <select>
                            <option>Chọn Quận huyện</option>
                            <option>Quận 1</option>
                            <option>Quận 2</option>
                            <option>Quận 3</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Phường xã</div>
                        <div className="input-group">
                        <select>
                            <option>Chọn Phường xã</option>
                            <option>Tăng Nhơn Phú A</option>
                            <option>Tăng Nhơn Phú B</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Địa chỉ</div>
                        <div className="input-group">
                        <textarea cols={30} rows={4} placeholder="Nhập địa chỉ" defaultValue={"156b, Lã Xuân Oai"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label">Loại địa chỉ</div>
                        <div className="input-group">
                        <div className="radio-group">
                            <input type="radio" name="addressType" id="home" />
                            <label htmlFor="home">
                            <div className="label-radio" />
                            Nhà riêng / Chung cư
                            </label>
                        </div>
                        <div className="radio-group">
                            <input type="radio" name="addressType" id="company" />
                            <label htmlFor="company">
                            <div className="label-radio" />
                            Cơ quan / Công ty
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-label" />
                        <button>Cập nhật</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
