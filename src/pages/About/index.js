import React, { Component } from 'react';
import './style.scss';
import Banner from '../../commons/components/Banner';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class AboutPage extends Component {
    render() {
        return (
            <>
                <Banner bannerTitle = "About Me"/>

                <section className="main-page section-padding">
                    <div className="cf-container">
                        <div className="d-flex-between about-page">
                            <div className="about--left">
                                <div className="about-thumb">
                                <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851626/BaristaCoffee/other/About-img-1_yz2nwz.png" alt="about me" />
                                </div>
                            </div>

                            <div className="about--right">
                                <div className="about-text">
                                <h2>Federico Hickman</h2>
                                <div style={{height: '40px'}}></div>
                                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.</p>
                                <div style={{height: '25px'}}></div>
                                <blockquote>
                                    <span>Aenean eu leo quam. Pellentesque ornare sem lacinia quavenenatis estibacenas sed diam eget</span>
                                </blockquote>
                                <div style={{height: '27px'}}></div>
                                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim.</p>
                                <div style={{height: '40px'}}></div>
                                <div className="social">
                                    <a href="/#"><span className="icon icon-facebook" /></a>
                                    <a href="/#"><span className="icon icon-twitter" /></a>
                                    <a href="/#"><span className="icon icon-vimeo" /></a>
                                    <a href="/#"><span className="icon icon-linkedin2" /></a>
                                    <a href="/#"><span className="icon icon-tumblr" /></a>
                                    <a href="/#"><span className="icon icon-instagram" /></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>

            </>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }

    
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(null, mapDispatchToProps)(AboutPage)
