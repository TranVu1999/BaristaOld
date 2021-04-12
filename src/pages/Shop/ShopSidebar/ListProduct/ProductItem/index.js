import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class index extends Component {
    render() {
        const {productContent} = this.props;

        return (
            <div className="prod-item">
                <NavLink to={`/product-detail/${productContent.productAlias}`} className="prod-thumb">
                    <img src={productContent.productAvatar} alt="prod thumb" />
                </NavLink>
                <div className="prod-text">
                    <span className="prod-title">
                        <NavLink to={`/product-detail/${productContent.productAlias}`}>{productContent.productTitle}</NavLink> 
                    </span>
                    <div className="product-rate">
                        <div 
                            className="product-rate--overlay" 
                            style={{width: 100 - productContent.productRating + '%'}} 
                        />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                    </div>
                    <p className="product-price">
                        {
                            productContent.productPromo ? (
                                <del> 
                                    <span className="price-symboy">$</span>{productContent.productPromo}
                                </del>
                            ): ""
                        }
                        
                        <span> <span className="price-symboy">$</span>{productContent.productPrice}</span> 
                    </p>
                </div>
            </div>
        )
    }
}
