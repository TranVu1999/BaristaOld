import React, { Component } from 'react';
import './style.scss';

import Banner from '../../commons/components/Banner';
import MainPage from '../../commons/components/MainPage';
import Navigation from '../../commons/components/Navigation';
import ShopProduct from './ShopProduct';
import ShopSidebar from './ShopSidebar';
import ShopControl from './ShopControl';
import Loading from '../../commons/components/Loading';

import {
    actInitShopApi, 
    actGetDataShopApi, 
    actChoosePage,
    actChooseSortBy,
    actGetDataShopByKeyApi,
    actInitListProductApi,
    actResetListProduct,
    actChooseCategory
} from './../../commons/modules/Shop/actions';
import {actUpdateUrl} from './../../commons/modules/Url/actions';
import {connect} from 'react-redux';
import ShopControlSidebar from './ShopControlSidebar';

class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            prodCateAlias: 'empty',
            isOpenSidebar: false,
            pastURL: '',
            currentURL: '' 
        }
    }

    handleChoosePage = (page) =>{
        this.props.onHanldeChoosePage(page);
        this.props.onGetDataShop({
            page,
            sortBy: this.props.sortBy
        })
        
    }

    handleSort = (sortBy) =>{
        const {pageActive, prodCateAlias} = this.props;
        this.props.onHandleSort(sortBy);
        // this.props.onGetDataShop({
        //     page: pageActive,
        //     sortBy
        // })

        this.props.onGetDataByKeyword({
            page: pageActive,
            sortBy,
            prodCateAlias,
            keyword: "empty",
        });
    }

    onHanldeSidebarControl = (flag) =>{
        this.setState({
            ...this.state,
            isOpenSidebar: !this.state.isOpenSidebar
        })
    }

    render() {
        const {isOpenSidebar} = this.state;

        const {
            listProduct, 
            amount, 
            pageActive
        } = this.props;

        return (
            <>
                
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className="d-flex-between align-start shop-page">
                            <ShopControlSidebar
                                onHanldeSidebarControl = {this.onHanldeSidebarControl}
                            />
                            <div className="main-page__content">
                                {0
                                    ? <Loading/>
                                    :(
                                        <>
                                            <ShopControl 
                                                amount = {amount}
                                                onHandleSort = {this.handleSort}
                                            />
                                            <ShopProduct lstProduct = {listProduct}/>
                                        </>
                                    )
                                }
                            </div>

                            <div 
                                className = {isOpenSidebar ? "main-page__sidebar open" : "main-page__sidebar"}
                            >
                                <ShopSidebar />
                            </div>
                        </div>
                        
                    </div>
                    <Navigation 
                        amount = {amount} 
                        per = "9" 
                        pageActive= {pageActive}
                        onChoosePage = {this.handleChoosePage}
                    />
                </MainPage>
     
            </>
        )
    }

    componentDidMount(){
        // global state
        this.props.onInitShop({
            page: 0, sortBy: 2
        });

        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })

        this.props.onInitListProduct({
            page: 0, sortBy: 2
        })
        
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.match.url !== prevState.currentURL){
            return {
                prodCateAlias: nextProps.match.params.prodCateAlias,
                pastURL: prevState.currentURL, 
                currentURL: nextProps.match.url
            }
        }
        return null;
        
    }

    componentDidUpdate(prevProps, prevState) {
        const {pastURL, currentURL} = this.state;
        if(pastURL === '/shop' && currentURL.indexOf("product-category") !== -1){
            if(this.state.prodCateAlias && this.state.prodCateAlias !== prevState.prodCateAlias){
                let {prodCateAlias} = this.state;
                prodCateAlias = prodCateAlias.slice(prodCateAlias.indexOf("=") + 1)
                this.props.onUpdateProductCategory(prodCateAlias)
                this.props.onGetDataByKeyword({
                    page: this.props.pageActive,
                    sortBy: this.props.sortBy,
                    prodCateAlias,
                    keyword: "empty",
                });
            }
        }else if(currentURL === '/shop' && pastURL.indexOf("product-category") !== -1){
            this.setState({
                prodCateAlias: 'empty',
                isOpenSidebar: false,
                pastURL: '',
                currentURL: ''
            })
            this.props.onGetDataShop({
                page: 0, sortBy: 2
            });
        }else if(pastURL.indexOf("product-category") !== -1 && currentURL.indexOf("product-category") !== -1){
            if(this.state.prodCateAlias && this.state.prodCateAlias !== prevState.prodCateAlias){
                let {prodCateAlias} = this.state;
                prodCateAlias = prodCateAlias.slice(prodCateAlias.indexOf("=") + 1)
                this.props.onUpdateProductCategory(prodCateAlias)
                this.props.onGetDataByKeyword({
                    page: this.props.pageActive,
                    sortBy: this.props.sortBy,
                    prodCateAlias,
                    keyword: "empty",
                });
            }
        }
    }
}

const mapStateToProps = state =>{
    const shopInfo = state.shopReducer;

    return{
        listProduct: shopInfo.data.listProduct.lstProduct,
        amount: shopInfo.data.listProduct.amount,
        isLoading: shopInfo.isLoading,
        pageActive: shopInfo.data.pageActive,
        sortBy: shopInfo.data.sortBy,
        prodCateAlias: shopInfo.data.prodCateAlias
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onInitShop: (data) =>{
            dispatch(actInitShopApi(data))
        },
        onGetDataShop: data => {
            dispatch(actGetDataShopApi(data))
        },
        onHanldeChoosePage: pageActive =>{
            dispatch(actChoosePage(pageActive))
        },
        onHandleSort: sortBy =>{
            dispatch(actChooseSortBy(sortBy))
        },
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        },
        onGetDataByKeyword: (keyword) =>{
            dispatch(actGetDataShopByKeyApi(keyword))
        },
        onInitListProduct: data=>{
            dispatch(actInitListProductApi(data))
        },
        onResetListProduct: () =>{
            dispatch(actResetListProduct())
        },
        onUpdateProductCategory: data =>{
            dispatch(actChooseCategory(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
