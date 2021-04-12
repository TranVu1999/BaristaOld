import React, { Component } from 'react'

export default class RadioFieldComponent extends Component {

    onHandleChange = (event) =>{
        this.props.onHandleChange(event);
    }

    render() {
        const {isChecked, name, label, id} = this.props;
        return (
            <div className="radio-group">
                <input 
                    type="radio" 
                    id = {id}
                    name= {name}
                    checked = {isChecked}
                    onChange = {this.onHandleChange}

                />
                <label htmlFor = {id}>
                <div className="label-radio" />
                    {label}
                </label>
            </div>
        )
    }
}
