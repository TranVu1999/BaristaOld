import React, { Component } from "react";
import LstProductContainer from "./../ListProduct";
import {connect} from 'react-redux';
import {actGetListProductApi} from './modules/action';
import {getAccountFromLocalStorage} from './../../commons/js/account';

class AccountListProduct extends Component {
  showTitleAccountContent = () => {
    const { title } = this.props;
    switch (title) {
      case "favorite":
        return "Sản phẩm yêu thích";
      case "readed":
        return "Sản phẩm đã xem";
      case "save-for-later":
        return "Sản phẩm mua sau";
      case "commented":
        return "Sản phẩm đã nhận xét";
      default:
        return "";
    }
  };

  getListProduct = () =>{
    const { title, data } = this.props;
    if(data){
      switch (title) {
        case "favorite":
          return data.favorite;
        case "readed":
          return data.readed;
        case "save-for-later":
          return data.saveForLater;
        case "commented":
          return data.commented;
        default:
          return null;
      }
    }
    return null;
    
  }

  render() {

    console.log("data", this.getListProduct());

    return (
      <div className="account-content--box">
        <span className="account__title">
            {this.showTitleAccountContent()} (1)
        </span>
        <div className="account__content">
          <div className="row-product">
            <LstProductContainer />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const accountInfo = getAccountFromLocalStorage();
    if(accountInfo){
      this.props.fetchData(accountInfo);
    }
  }
}

const mapStateToProps = state => {
  return{
    loading: state.accountListProductReducer.loading,
    data: state.accountListProductReducer.data,
    errors: state.accountListProductReducer.errors,
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchData: (data) =>{
      dispatch(actGetListProductApi(data));
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps) (AccountListProduct);
