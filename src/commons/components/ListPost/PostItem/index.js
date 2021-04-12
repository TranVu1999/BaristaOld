import React, { Component } from 'react'

export default class PostItem extends Component {
    render() {
        const {postItem} = this.props;

        return (
            <article className="post intro-post">
                <div 
                    className="post--image"
                    style = {{
                        marginBottom: postItem.postNum ? "0px" : "25px "
                    }}
                >
                    <a href="/#">
                        <img src = {postItem.postImg} alt="post" />
                    </a>
                </div>
                <div className="post--text">
                    <h3 className="post--text__title">
                        {postItem.postNum ? (
                            <span className="number">{postItem.postNum}</span>
                        ) : ""}
                        
                        <a href="/#">{postItem.postTitle}</a>
                    </h3>

                    {postItem.postAuthor ? (
                        <div className="post--text__info">
                            <div className="post--text__info--author">
                                <a href="/#">by {postItem.postAuthor}</a>
                            </div>
                            <div className="post--text__info--categories">
                                <a href="/#">{postItem.postCategory}</a>
                            </div>
                            <div className="post--text__info--update">
                                <span>{postItem.postDate}</span>
                            </div>
                        </div>
                    ) : ""}
                    

                    <p className="post--text__short-desc">{postItem.postShortDesc}</p>
                    <a href="/#" className="barista-read-more">Read more <span className="icon icon-arrow-right2" /></a>
                </div>
            </article>
        )
    }
}
