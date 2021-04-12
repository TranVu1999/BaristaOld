import React, { Component } from 'react';
import CommentItem from './CommentItem';
import {connect} from 'react-redux';

class ListComment extends Component {

    renderListComment = () =>{
        const {listComment} = this.props;
        
        return listComment.map((item, index) =>{
            return <CommentItem key = {index} contentComment = {item}/>
        })
    }

    render() {
        return (
            <ul className="cmt-list">
                {this.renderListComment()}
            </ul>
        )
    }
}

const mapStateToProps = state =>{
    const proddetail = state.productDetailReducer.data;
    return{
        listComment: proddetail.prodReview
    }
}

export default connect(mapStateToProps, null)(ListComment)
