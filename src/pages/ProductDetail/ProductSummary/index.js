import React, { Component } from 'react';
import FormAddCart from './../../../commons/components/FormAddCart';
import './style.scss';

import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {actAddCart} from './../../../commons/modules/Cart/actions';

class ProductSummary extends Component {

    onHandleAddCart = (number) =>{
        const {prodInfo} = this.props;
        let data = {
            prodId: prodInfo.prodId,
            prodTitle: prodInfo.prodTitle,
            prodAlias: prodInfo.prodAlias,
            prodPrice: prodInfo.prodPrice,
            prodPromo: prodInfo.prodPromo,
            prodAvatar: prodInfo.prodAvatar,
            amount: number
        }
        this.props.addCart(data);
    }

    standardizedString = (str) =>{
        return str ? str.replace(/ /g, '-').toLowerCase() :"";
        
    }

    renderProductInfo = () =>{
        const {prodInfo} = this.props;

        if(prodInfo){
            return (
                <>
                    <h3 className="product-title">{prodInfo.prodTitle}</h3>
                    <div className="product-rate__box">
                        <div className="product-rate">
                            <div 
                                className="product-rate--overlay" 
                                style={{width: 100 - prodInfo.productRating + '%'}} 
                            />

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
                        {   prodInfo.prodPromo 
                            ? (
                                <del> 
                                    <span className="price-symboy">$</span>
                                    {prodInfo.prodPromo}
                                </del>
                            )
                            : ""
                        }
                        
                        <span> <span className="price-symboy">$</span>{prodInfo.prodPrice}</span> 
                    </p>
                    <p className="product__short-desc">{prodInfo.prodShortDesc}</p>

                    <FormAddCart 
                        onHandleAddCart = {this.onHandleAddCart}
                    />

                    <div className="product-meta">
                        <div className="product-meta__item">
                            <label>Sku</label>
                            <span>{prodInfo.prodSKU}</span>
                        </div>

                        <div className="product-meta__item">
                            <label>Category</label>
                            <span>Coffee</span>
                        </div>

                        <div className="product-meta__item">
                            <label>Tag</label>
                            <span>
                                <NavLink 
                                    to = {"/product-category/" + this.standardizedString(prodInfo.prodCateTitle)}
                                >{prodInfo.prodCateTitle}</NavLink>
                            </span>
                        </div>
                    </div>

                    <div className="product-meta">
                        <div className="product-meta__item">
                        <label>Share</label>
                        <ul className="lst-share-icon">
                            <li>
                                <a href="/#"><span aria-hidden="true" className="social_facebook"></span></a>
                            </li>
                            <li><a href="/#"><span aria-hidden="true" className="social_twitter" /></a></li>
                            <li><a href="/#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                            <li><a href="/#"><span aria-hidden="true" className="social_tumblr" /></a></li>
                        </ul>
                        </div>
                    </div>
                </>
            )
        }
    }

    render() {      
        return (
            
            <div className="product-summary">
                {this.renderProductInfo()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const prodDetail = state.productDetailReducer.data;
    return {
        prodInfo: {
            prodTitle: prodDetail.productTitle,
            prodRating: prodDetail.productRating,
            prodPromo: prodDetail.productPromo,
            prodPrice: prodDetail.productPrice,
            prodShortDesc: prodDetail.productShortDesc,
            prodSKU: prodDetail.productSKU,
            prodCateTitle: prodDetail.prodCateTitle,
            prodAlias: prodDetail.productAlias,
            prodId: prodDetail.productId,
            prodAvatar: prodDetail.productImage.productAvatar
        },
        prod: prodDetail
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addCart: product =>{
            dispatch(actAddCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary)
