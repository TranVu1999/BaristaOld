import React, { Component } from 'react';
import './style.scss';

export default class FullBanner extends Component {
    render() {
        return (
            <div className="d-flex-center full-banner" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851620/BaristaCoffee/backgrounds/What-we-offer-title-img-800_criujg.jpg)'}}>
                <div className="py-0 banner__content">
                    <div className="banner--text">
                    <h1>What we offer</h1>
                    </div>
                </div>
            </div>
        )
    }
}
