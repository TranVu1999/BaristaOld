import React, { Component } from 'react'

export default class BannerItem extends Component {
    render() {
        const {bannerContent} = this.props;

        return (
            <a href="/#" className="banner__item" style={{backgroundImage: `url(${bannerContent.bgImage})`}}>
                <div className="banner--overlay"></div>
                <div className="d-flex-between banner--text">
                    <h6>{bannerContent.bannerTitle}</h6>
                    <button>Read more <span className="icon icon-arrow-right2" /></button>
                </div>
            </a>
        )
    }
}
