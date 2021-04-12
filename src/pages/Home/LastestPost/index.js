import React, { Component } from 'react'
import api from './../../../api';
import * as ApiUrl from './../../../commons/constant/ApiUrl';

import ListPost from '../../../commons/components/ListPost'
import TitleBox from '../../../commons/components/TitleBox'

export default class LastestPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            listPost: []
        }
    }

    render() {
        return (
            <section className="cf-container mb-100">
                <TitleBox smallTitle = "What Happens Here" mainTitle = "Read Our Latest News"/>
                <ListPost listPost = {this.state.listPost}/>
            </section>
        )
    }

    componentDidMount(){
        api.get(`/${ApiUrl.POST}/get-recent`)
        .then(res =>{
            this.setState({
                listPost: res.data
            })
        })
        .catch(err =>{
            console.log("err", err);
        })
    }
}
