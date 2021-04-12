import React, { Component } from 'react';
import BannerItem from './BannerItem';
import './style.scss';

export default class ListBanner extends Component {

    constructor(props){
        super(props);
        this.state = {
            listBannerItem : [
                {
                    bgImage: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851620/BaristaCoffee/banners/banner1_fki7lj.jpg",
                    bannerTitle: "New Coffee Flavours",
                },
                {
                    bgImage: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/other/banner2_yrdt6u.jpg",
                    bannerTitle: "This Friday 25% Off",
                }
            ]
        }
    }

    renderHTML = () =>{
        const {listBannerItem} = this.state;
        return listBannerItem.map((item, index) => <BannerItem key = {index} bannerContent = {item}/>)
    }

    render() {
        return (
            <section className="section-padding banner">
                <div className="cf-container d-flex-between banner__content">
                    {this.renderHTML()}
                </div>
            </section>

        )
    }
}
