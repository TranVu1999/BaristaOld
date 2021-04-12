import React, { Component } from "react";
import './assets/Sass/index.scss';

// LAYOUT
import Header from './commons/components/Header';
import Footer from './commons/components/Footer';

import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {actInitAccountInfo} from './commons/modules/Login/actions';
import routes from './pages/routes';
import Login from "./containers/Login";
import Cart from "./commons/components/Cart";
import Notification from "./commons/components/Notification";
import QuickView from "./commons/components/QuickView";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      oldPos: 0,
      isFixedHeader: false
    }
  }

  listenToScroll = () => {
    const {oldPos} = this.state;
    const currentPos =
      document.body.scrollTop || document.documentElement.scrollTop;

    if(currentPos === 0){
      this.setState({
        oldPos: 0,
        isFixedHeader: false
      })
    }else if(currentPos < oldPos){
      this.setState({
        oldPos: currentPos,
        isFixedHeader: true
      })
    }else{
      this.setState({
        oldPos: currentPos,
        isFixedHeader: false
      })
    }
  }


  render(){
    const{isFixedHeader} = this.state;
    return (
      <div 
        className = "main-wrapper page"
      >
        <Header isFixedHeader = {isFixedHeader}/>

        <Switch>
          {routes.map((item, index) =>{
            return <Route key = {index} path = {item.path} component = {item.component}/>
          })}
        </Switch>

        <Footer/>

        <Login/>
        <Cart/>
        <Notification/>
        <QuickView/>
      </div>
    );
  }

  componentDidMount(){
    window.addEventListener('scroll', this.listenToScroll)
    this.props.onInitAccountInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  
}

const mapDispatchToProps = dispatch =>{
  return{
    onInitAccountInfo: () =>{
      dispatch(actInitAccountInfo())
    }
  }
}



export default connect(null, mapDispatchToProps)(App);
