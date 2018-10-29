import React, { Component } from 'react';
import classes from './Email.css';
import FormFields from './FormFields/FormFields';
import {validate} from '../UI/Util/Helpers';

class Email extends Component {

    state = {
        formError:false,
        formSuccess: '',
        formData:{
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    placeholder:'Enter Your Email',
                    type: 'email'
                },
                validation:{
                    required:true,
                    email:true,
                },
                valid:false,
                validationMessage: ''
               
            }
        }

    }
    submitFormHandler = (e)=>{
        e.preventDefault();
        console.log('form was submiteed');
    }

    inputEventHandler = (element)=>{
        const newFormData = {...this.state.formData};
        const newElement = {...newFormData[element.id]};
        newElement.value = element.e.target.value;
        newFormData[element.id] = newElement;
        this.setState({formData:newFormData});

        validate();
    }
    render() {
        return (
            <div className = {classes.Email}>
                    <h2>Enter your email</h2>
                 <form onSubmit = {this.submitFormHandler} action="">
                    <FormFields
                        id = {'email'}
                        formData = {this.state.formData.email}
                        change = {this.inputEventHandler}
                    />
                 </form>
            </div>
       
        );
    }
}

export default Email;