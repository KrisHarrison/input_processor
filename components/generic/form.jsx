import React, { Component } from 'react';
import DropDownMenu from './dropDownMenu'
import Input from './input'

class Form extends Component {
    state = {
        data:{},
        errors:{}
      }


    validate = () =>{
        let {typeId, input} = this.state.data
        let errors = {};
        
        if(typeId === "")
           errors.typeId = 'Type required!' 

        if(input.trim() === '') 
            errors.input = 'Enter a string!'

        return Object.keys(errors).length === 0?null :errors
    }

    validateProperty = ({name,value}) =>{
        if(name === 'input')
         if(value.trim() === '') 
            return 'Enter a valid string'
    }

    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate()
        this.setState({errors: errors || {} });
        
        if(errors)return;

        this.doSubmit()
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        let data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors})
    }

    renderDropDown(name, label, inputTypes){
        let {errors} = this.state
        return(
            <DropDownMenu 
                name={name}
                label={label} 
                data={inputTypes}
                onChange={this.handleChange}
                error={errors[name]}
                >
             </DropDownMenu>
        );
    }

    renderInput(name, type, label){
        let {data, input, errors} = this.state
        return (
            <Input
                name={name}
                input={data[input]}
                type={type}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
                >
             </Input>
        );
        
    }
    renderButton(label){
        return(
            <button 
            className={"submit"} 
            //disabled={}
            type={"button"}
            onClick={this.handleSubmit}
            >{label}
            </button>
        );
    }

}
 
export default Form;