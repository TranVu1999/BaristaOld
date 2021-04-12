import React, { Component } from 'react';
import * as Validate from "./../../js/validate-input";
import * as Notify from "./../../constant/Notify";

export default class InputPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notify: "",
        };
    }
    
      handleOnEnter = (event) => {
        const { value } = event.target;
        let flag = true;
    
        if (!Validate.isPassword(value)) {
            flag = false;
            this.setState({ notify: Notify.IS_NOT_PASSWORD });
            
        }
    
        if (Validate.isEmpty(value)) {
            flag = false;
            this.setState({ notify: Notify.IS_EMPTY });
        }
    
        if(flag){
            this.props.onGetPassword(value);
            this.setState({notify: ''});
        }
        
      };

    render() {
        const { notify} = this.state;
        const { placeholder } = this.props;
        return (
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder= {placeholder} 
                    maxLength = "20"
                    minLength = "8"
                    onBlur={this.handleOnEnter}
                /> 
                {notify !== "" ? (<p className="notify warning">{notify}</p>) : null}
            </div>
        )
    }
}
