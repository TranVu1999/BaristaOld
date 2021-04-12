import React, { Component } from 'react'

import api from './../../../api';
import * as ApiUrl from './../../../commons/constant/ApiUrl';

import ListPost from '../../../commons/components/ListPost';


export default class ServicePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            listServiceContent: []
        }
    }
    render() {
        const {listServiceContent} = this.state;

        return (
            <section className = "cf-container">
                <ListPost listPost = {listServiceContent}/>
            </section>
        )
    }

    componentDidMount(){
        api.get(`/${ApiUrl.POST}/get-service`)
        .then(res =>{
            let temp = [];
            let lengthListService = res.data.length;

            for(let i = 0; i < lengthListService; i++){
                let newItem = {...res.data[i], postNum: "0" + (i + 1)}
                temp.push(newItem);
            }

            this.setState({
                listServiceContent: temp
            });
        })
        .catch(err =>{
            console.log("err", err);
        })
    }
}
