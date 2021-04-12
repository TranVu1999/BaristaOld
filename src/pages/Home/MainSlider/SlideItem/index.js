import React, { Component } from 'react';
import Button from './../../../../commons/components/Button';

export default class SlideItem extends Component {

    renderTitleBox = () =>{
        const {itemContent} = this.props;

        return itemContent.posLeft ? (
            <div className="title-box__animate">
                <div className="blur-animate">
                    {itemContent.letters.map((item, index) =>{
                        return <div className="letter" key = {index}>{item}</div>
                    })}
                </div>
                <div className="move-animate move">{itemContent.word}</div>
            </div>
        ) : (
            <div className="title-box__animate">
                <div className="blur-animate">
                    {itemContent.word}
                </div>
                <div className="move-animate">
                    {itemContent.letters.map((item, index) =>{
                        return <div className="letter" key = {index}>{item}</div>
                    })}
                </div>
            </div>
        );
    }


    render() {
        const {itemContent} = this.props;

        return (
            
            <div className="item__content bg-white" style={{backgroundImage: `url(${itemContent.img})`}}>
                <div className="slide-title-box">
                <h1>{itemContent.mainTitle}</h1>

                {this.renderTitleBox()}

                <div className="desc-box__animate">
                    {itemContent.sortDesc}
                </div>
                <div className="read-more-box__animate">
                    <Button/>
                </div>
                </div>
            </div>
        )
    }
}
