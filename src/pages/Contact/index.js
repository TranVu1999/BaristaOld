import React, { Component } from 'react';
import './style.scss';
import Banner from '../../commons/components/Banner'
import TitleBox from '../../commons/components/TitleBox'

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class ContactPage extends Component {
    render() {
        return (
            <>
                <Banner bannerTitle = "Contact Us"/>

                <section className="main-page contact section-padding">
                    <TitleBox smallTitle = "Feel free to" mainTitle = "Contact Us"/>

                    <div className="cf-container">
                        <div className="d-flex-between contact-container">
                        <div className="pr-15 contact--left">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.497076757964!2d106.76939931411705!3d10.849746760804486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270ad28d48ab%3A0xa6c02de0a7c40d6c!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBTxrAgUGjhuqFtIEvhu7kgVGh14bqtdCBUcC5IQ00!5e0!3m2!1svi!2s!4v1609427565102!5m2!1svi!2s" height={425} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="pl-15 contact--right">
                            <form className="contact-us">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <textarea cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
                            </div>
                            <div className="form-group text-right">
                                <button className="coffee-btn">Send</button>
                            </div>
                            </form>
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

export default connect(null, mapDispatchToProps)(ContactPage)
