import React, { Component } from 'react'

export default class InputFieldComponent extends Component {

    onHandleChange = (event) =>{
        this.props.onHandleChange(event);
    }

    render() {
        let {value, placeholder, name} = this.props;
        return (
            <div className="input-group">
                <input 
                    type="text" 
                    defaultValue= {value}
                    placeholder = {placeholder} 
                    onChange = {this.onHandleChange}
                    name = {name}
                /> 
            </div>
        )
    }
}
