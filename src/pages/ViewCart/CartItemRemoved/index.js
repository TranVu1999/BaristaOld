import React, { Component } from 'react';
import AccordingToggle from './../../../commons/components/AccordingToggle';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {actUndoItem} from './../../../commons/modules/Cart/actions';

class CartItemRemoved extends Component {

    onHandleUndo = (prodId) =>{
        this.props.undoCartItem(prodId);
    }

    renderCartItemRemoved = () =>{
        const {dataRemoved} = this.props;
        console.log("removed", dataRemoved);
        if(dataRemoved){
            console.log("removed", dataRemoved);
            return dataRemoved.map((item, index) =>{
                return (
                    <AccordingToggle key = {index}>
                        <div className="accordition-toggle--box">
                            <div className ="d-flex-between">
                                <div className = "accordition-span accordition--left">
                                    <NavLink to = {`product-detail/${item.prodAlias}`}>
                                        {item.prodTitle}
                                    </NavLink>
                                    
                                </div>
                                <button 
                                    className = "accordition-span accordition--right"
                                    onClick = {() => this.onHandleUndo(item.prodId)}
                                >Undo?</button>
                            </div>
                        </div>
                    </AccordingToggle>
                )
            })
        }
        return null;
    }
    render() {
        return (
            <>{this.renderCartItemRemoved()}</>
        )
    }
}

const mapStateToProps = state =>{
    return {
        dataRemoved: state.cartReducer.removed
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        undoCartItem: (prodId) =>{
            dispatch(actUndoItem(prodId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemRemoved)
