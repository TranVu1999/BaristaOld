import React, { Component } from 'react';
import ProductImage from './ProductImage';
import './style.scss';
import {connect} from 'react-redux';

import {actChangeProductAvatar} from './../modules/actions';

class ProductThumb extends Component {
    onhanldeChoseImage = (index) =>{
        const {prodMoreImage} = this.props;
        this.props.handleChangeProductAvatar(prodMoreImage[index]);
    }

    renderImage = () =>{
        const {prodAvatar, prodMoreImage} = this.props;

        if(prodAvatar){
            return (
                <>
                    <div className="product-thumb">
                        <img src={prodAvatar} alt="product avatar" />
                    </div>

                    <div className="d-flex-between product-lst-images">
                        
                        {
                            prodMoreImage.map((item, index) =>{
                                return (
                                    <ProductImage
                                        key = {index}
                                        prodImg = {item}
                                        indexImg = {index}
                                        onChoseImage = {this.onhanldeChoseImage}
                                    />
                                )
                            })
                        }
                        
                    </div>
                </>
            )
        }

        return null;
    }

    render() {
        return (
            <div className="product-images">
                {this.renderImage()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const {productImage} = state.productDetailReducer.data;
    return{
        prodAvatar: productImage.productAvatar,
        prodMoreImage: productImage.productMoreImage
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        handleChangeProductAvatar: imgUrl =>{
            dispatch(actChangeProductAvatar(imgUrl))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductThumb)
