import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './style.scss';
import {connect} from 'react-redux';
import {actAddCart} from './../../modules/Cart/actions'

class ListProduct extends Component {

    onHandleAddCart = (product) =>{
        let data = {
            prodId: product.productId,
            prodTitle: product.productTitle,
            prodAlias: product.productAlias,
            prodPrice: product.productPrice,
            prodPromo: product.productPromo,
            prodAvatar: product.productAvatar,
            amount: 1
        }

        this.props.addCart(data);
    }

    renderListProduct = () =>{
        const {lstProduct, dataCart} = this.props;

        if(lstProduct){
            return lstProduct.map((item, index) =>{
                let isExistCart = false;

                for(let itemCart of dataCart){
                    if(itemCart.prodId === item.productId){
                        isExistCart = true;
                        break;
                    }
                }

                return <ProductItem 
                            key = {index} 
                            productContent = {item}
                            isExistCart = {isExistCart}
                            onHandleAddCart = {this.onHandleAddCart}
                        />
                
            })
        }
        return null;
        
    }

    render() {
        const {rowShow} = this.props;
        
        return (
            <div 
                className= {
                    rowShow 
                    ?`d-gr-${rowShow} lst-product__container`
                    : "d-gr-4 lst-product__container"
                }
            > 
                {this.renderListProduct()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        dataCart: state.cartReducer.data
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addCart: product =>{
            dispatch(actAddCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
