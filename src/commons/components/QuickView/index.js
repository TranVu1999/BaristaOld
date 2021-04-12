import React, { Component } from 'react';
import FormAddCart from './../FormAddCart';
import {connect} from 'react-redux';
import {actCloseQuickView, actChangeImage} from './../../modules/QuickView/actions';
import './style.scss';

class QuickView extends Component {
    onHandleAddCart = () =>{
    }

    onChooseShowImage = (indexActiveImage) =>{
        this.props.onChangeImage(indexActiveImage)
    }

    onCloseQuickView = () =>{
        this.props.onCloseQuickView(false)
    }

    renderMoreImage = () =>{
        const {productContent} = this.props.quickViewInfo;
        const {indexActiveImage} = this.props.quickViewInfo;

        if(productContent.moreImage){
            const lstImage = productContent.moreImage.slice(0, 4);
            return lstImage.map((item, index) =>{
                return (
                    <div 
                        key = {index}
                        className = {indexActiveImage === index ? "image--item active" : "image--item"}
                        onClick = {() => this.onChooseShowImage(index)}
                    >
                        <img src = {item} alt = "thumbnail"/>
                    </div>
                )
            })
        }
        return null;
        
    }

    render() {
        const {quickViewInfo} = this.props;
        const {productContent} = quickViewInfo;

        return (
            <div 
                className = {quickViewInfo.isOpenQuickView ? "quickview-box open" : "quickview-box"}
            >               
                <div className = "quickview-container">
                    <button 
                        className="close-quickview"
                        onClick = {this.onCloseQuickView}
                    >
                        <span aria-hidden="true" className="icon_close_alt2" />
                    </button>
                    <div className = "quickview--left">
                        <div className = "quickview__thumb">
                            <img src = {
                                productContent.moreImage ? 
                                productContent.moreImage[quickViewInfo.indexActiveImage] : ""} alt = "thumbnail"/>
                        </div>
                        <div className = "quickview__image">
                            {this.renderMoreImage()}
                        </div>
                    </div>

                    <div className = "quickview--right">
                        <h2 className="product-title">{productContent.productTitle}</h2>

                        <div className="d-flex-start product-rate__box">
                            <div className="product-rate">
                                <div className="product-rate--overlay" style={{width: 100 - productContent.productRating + '%'}}/>

                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>

                            <p className="product-rate--text">
                                (2 customer reviews)
                            </p>
                        </div>

                        <p className="product-price">

                            {
                                productContent.productPromo ? 
                                <del> <span class="price-symboy">$</span>{productContent.productPromo}</del> : 
                                ""
                            }
                            <span> <span className="price-symboy">$</span>{productContent.productPrice}</span> 
                        </p>

                        <p className="product__short-desc">{productContent.productShortDesc}</p>

                        <FormAddCart 
                            onHandleAddCart = {this.onHandleAddCart}
                        />

                        <div className = "read-more text-right">
                            <a href = "/#" className = "barista-read-more">Go to detail <span className="icon icon-arrow-right2" /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        quickViewInfo : state.quickViewReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onCloseQuickView: isClose =>{
            dispatch(actCloseQuickView(isClose))
        },
        onChangeImage: indexActiveImage =>{
            dispatch(actChangeImage(indexActiveImage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickView)
