import React, { Component } from 'react'
import ListProduct from '../../../commons/components/ListProduct'
import TitleBox from '../../../commons/components/TitleBox'

export default class HotSale extends Component {
    constructor(props){
        super(props);
        this.state = {
            listProduct: [
                {
                    productId: "prd01",
                    productTitle: "paper pouch",
                    productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
                    productPrice: "46.00",
                    rating: 90,
                    isSale: false
                },
                {
                    productId: "prd02",
                    productTitle: "paper bag",
                    productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod12_mc7rpz.jpg",
                    productPrice: "79.00",
                    productPromo: "98.00",
                    rating: 85,
                    isSale: true
                },
                {
                    productId: "prd03",
                    productTitle: "plastic pouch",
                    productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod3_nwf7du.jpg",
                    productPrice: "27.00",
                    rating: 80,
                    isSale: false
                },
                {
                    productId: "prd04",
                    productTitle: "paper pouch",
                    productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod7_a8r7zg.jpg",
                    productPrice: "71.00",
                    rating: 95,
                    isSale: false
                }
            ]
        }
    }
    render() {
        return (
            <section className="section-padding lst-product">
                <TitleBox smallTitle = "What Happens Here" mainTitle = "Merchandise - Sale"/>
                <div className = "cf-container">
                    <ListProduct lstProduct = {this.state.listProduct}/>
                </div>
            </section>

        )
    }
}
