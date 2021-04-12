import React, { Component } from 'react';
import './style.scss';

export default class Banner extends Component {
    render() {
        const {bannerTitle, bannerImg} = this.props;
        return (
            <div 
                className="page dark banner" 
                style={{backgroundImage: bannerImg ? `url(${bannerImg})` : 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/banner6_haqpao.jpg)'}}
                >
                <div className="py-0 banner__content">
                    <div className="d-flex-center banner--text">
                        <h1>{bannerTitle}</h1>
                    </div>
                </div>
            </div>

        )
    }
}
