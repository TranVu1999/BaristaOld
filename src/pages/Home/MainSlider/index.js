import React, { Component } from 'react';
import './style.scss';

import SlideItem from './SlideItem';

export default class MainSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            pos: 0, 
            currentSlide: 0,
            slideItem: [
                {
                    mainTitle: "distinct",
                    letters: ['A', 'R', 'O', 'M', 'A'],
                    posLeft: true,
                    word: "COFFEE",
                    img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/slider2_koyux7.jpg",
                    sortDesc: "Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et."
                },
                {
                    mainTitle: "Made",
                    letters: ['F', 'E', 'E', 'L', 'L', 'I', 'N', 'G'],
                    posLeft: false,
                    word: "with",
                    img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/slider1_tewu6o.jpg",
                    sortDesc: "Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et."
                },
                {
                    mainTitle: "UNIQUELY",
                    letters: ['T', 'A', 'S', 'T', 'E'],
                    posLeft: false,
                    word: "fresh",
                    img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851622/BaristaCoffee/banners/slider3_uq8xmo.jpg",
                    sortDesc: "Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et."
                }
            ]
        }
    }

    onhandleNav = (direct) =>{
        let {currentSlide} = this.state;

        currentSlide += direct;
        if(currentSlide >= 0 && currentSlide < 3){
            this.setState({
                pos: currentSlide * 100,
                currentSlide                
            })
        }
    }

    renderHTML = () =>{
        const {pos, currentSlide, slideItem} = this.state;

        let html = slideItem.map((item, index) =>{
            if(index === 0){
                return (
                    <div 
                        key = {index}
                        className={currentSlide === index ? "item active" : "item leave"}
                        style = {{
                            marginLeft: -pos + "%"
                        }}
                    ><SlideItem itemContent = {item}/></div>
                )
            } 

            return (
                <div 
                    key = {index}
                    className={currentSlide === index ? "item active" : "item leave"}
                    
                ><SlideItem itemContent = {item}/></div>
            )
        })

        return html;
    }

    render() {
        return (
            <section className="main-slider">
                <div className="main-slider__content">
                    <div className="carousel main-carousel" id="main_carousel">
                        <div className="coursel__content">
                            {this.renderHTML()}
                        </div>
                        
                        <div className="main-carousel__nav">
                            <button 
                                className="nav-left"
                                onClick = { () =>{this.onhandleNav(-1)} }
                            ><span className="icon icon-arrow-left2"> </span></button>
                            <button 
                                className="nav-right"
                                onClick = { () =>{this.onhandleNav(1)} }
                            ><span className="icon icon-arrow-right2" ></span></button>
                        </div>
                        <div className="main-carousel__dots">
                            <button className="dot active" data-current-slide={0} />
                            <button className="dot" data-current-slide={1} />
                            <button className="dot" data-current-slide={2} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount(){
        // done
        setInterval(() => {
            let {currentSlide} = this.state;

            currentSlide += 1;
            if(currentSlide < 3){
                this.setState({
                    pos: currentSlide * 100,
                    currentSlide                
                })
            }else{
                this.setState({
                    pos: 0,
                    currentSlide: 0              
                })
            }
        }, 5000);
    }

    componentWillUnmount(){
        // done
        // var interval_id = window.setInterval("", 9999);
        // for (var i = 1; i < interval_id; i++)
        //     window.clearInterval(i);
    }
}
