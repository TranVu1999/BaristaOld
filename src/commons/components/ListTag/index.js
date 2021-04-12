import React, { Component } from 'react';
import './style.scss';
import TagItem from './TagItem';

import {connect} from 'react-redux';

class ListTag extends Component {

    renderTag = () =>{

        const {lstTag} = this.props;

        if(lstTag){
            return lstTag.map((item, index) =>{
                return <TagItem 
                    key = {index}
                    tagItem = {item}
                />
            })
        }

        return null;
        
    }
    render() {
        return (
           <div className="lst-tag">
                {this.renderTag()}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        listProductCate: state.shopReducer.data.listProductCate
    }
}

export default connect(mapStateToProps) (ListTag);