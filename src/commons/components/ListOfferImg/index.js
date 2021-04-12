import React, { Component } from 'react';
import './style.scss';

export default class ListOfferImg extends Component {
    render() {
        return (
            <div className="d-gr-3 offer-grid-image">
                <div className="grid-image--img item-img-1" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851618/BaristaCoffee/backgrounds/Offerings-holder-img-1-N_ml5zsy.jpg'}}>
                    <div className="grid-image--content text-white">
                    <h2>Brewing Guide</h2>
                    <p><span>Lorem ipsum dolor sit amet, aeque possit voluptaria eum ea. Denique erroribus et pri, mea vitae latine vocibus eu. Mel diam semper suavitate at, vis id nostro consectetuer.</span></p>
                    <a href="/#" className="barista-read-more">Read more <span className="icon icon-arrow-right2" /></a>
                    </div>
                </div>
                <div className="grid-image--img item-img-2 cf-bg">
                    <div className="grid-image--content">
                    <h2>Brewing Guide</h2>
                    <p><span>Lorem ipsum dolor sit amet, aeque possit voluptaria eum ea. Denique erroribus et pri, mea vitae latine vocibus eu. Mel diam semper suavitate at, vis id nostro consectetuer, ut modo offendit constituam.</span></p>
                    <a href="/#" className="barista-read-more">Read more <span className="icon icon-arrow-right2" /></a>
                    </div>
                </div>
                <div className="grid-image--img item-img-3" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/Offerings-holder-img-2-N_ovrrhm.jpg'}}>
                    <div className="grid-image--content">
                    </div>
                </div>
                <div className="grid-image--img item-img-4" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/logo/Offerings-holder-img-3-N_eot2xk.jpg'}}>
                    <div className="grid-image--content">
                    </div>
                </div>
                <div className="grid-image--img item-img-5" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/Offerings-holder-img-4-N_fttrph.jpg'}}>
                    <div className="grid-image--content">
                    </div>
                </div>
                <div className="grid-image--img item-img-6" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851618/BaristaCoffee/backgrounds/Offerings-holder-img-5-N_ev8ckf.jpg'}}>
                    <div className="grid-image--content text-white">
                    <h2>Brewing Guide</h2>
                    <p><span style={{color: '#ffffff'}}>Lorem ipsum dolor sit amet, aeque possit voluptaria eum ea. Denique erroribus et pri, mea vitae latine vocibus eu. Mel diam semper suavitate at, vis id nostro consectetuer, ut modo offendit constituam.</span></p>
                    <a href="/#" className="barista-read-more">Read more <span className="icon icon-arrow-right2" /></a>
                    </div>
                </div>
            </div>

        )
    }
}
