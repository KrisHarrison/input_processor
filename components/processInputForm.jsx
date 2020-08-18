import React from 'react';
import Form from './generic/form'


class ProcessInputForm extends Form {
    state = { 
        data:{typeId:"", input:""},
        errors:{},
        inputTypes:[{id:1,type:""},{id:2,type:"integer"},{id:3,type:"string"}]

     }

     doSubmit(){
        console.log("submit")
     }
    render() { 
        let {inputTypes} = this.state
        return ( 
            <div className="form">
                <form>
                    {this.renderDropDown("typeId","Input Type:", inputTypes)}
                    {this.renderInput("input","text","Input:")}
                    {this.renderButton("Submit")}
                </form>    
            </div>
          );
    }
}
 
export default ProcessInputForm;