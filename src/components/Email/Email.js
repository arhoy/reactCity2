import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Email.css';
import {firebasePromotions} from '../../resources/firebase';


class Email extends Component {
    state = {
        formError:false,
        formSuccess:"",
        emailForm:{

            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder:'Your Email'
                },
                value: '',
                validation:{
                    required:true,
                    email:true
                },
                isValid:false,
                validationMessage:null
            }

        }
    }

    orderHandler = (e) =>{
      
        e.preventDefault();
        let formData = {};
        let formIsValid = true;
        for(let i in this.state.emailForm){
            formData[i] = this.state.emailForm[i].value;
            formIsValid = this.state.emailForm.email.isValid && formIsValid;
        }
        if(formIsValid){
            // check to see if the email already exists in the db or not
            firebasePromotions.orderByChild('email').equalTo(formData.email).once('value')
                .then((snapshot)=>{
                    // we have got a matching email with the database
                    if(snapshot.val() === null){
                        // push new email to the database
                        firebasePromotions.push(formData);
                        this.resetFormSuccess(true);
                    }
                    else{   
                        console.log('email already in the system!');
                        this.resetFormSuccess(false);
                 
                    }
               
                })
         
          
        }
        else{
            this.setState({
                formError:true,
                formSuccess:'Please Enter a valid email!'
            });
        }

        // clear the form 
        this.clearForm();


  
     
    }
    inputChangeHandler = (event,inputIdentifier) =>{
      
        // create deep copy of the state
        const updatedemailForm = {...this.state.emailForm};
        // copy of the second tier... we are not changing the element config only the value, so we don't need to clone that deeply
        const updatedFormElement = {...updatedemailForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        // update the second tier
     
         // check validitiy
         if(event.target.value !== ''){
            updatedFormElement.isValid = true;
          //  updatedFormElement.validationMessage = "Email is Valid!";
        }
        else{
            updatedFormElement.isValid = false;
         //   updatedFormElement.validationMessage = "Please enter a valid email";
        }
 
        updatedemailForm[inputIdentifier] = updatedFormElement;

       
        //update the state
        this.setState({emailForm:updatedemailForm});
      
    }
    resetFormSuccess = (type) =>{
        const newFormData = {...this.state.emailForm};
        for(let key in newFormData){
            newFormData[key].value = '';
            newFormData[key].isValid = false;
            newFormData[key].validationMessage = '';
        }
        this.setState({
            formError : false,
            emailForm: newFormData,
            formSuccess: type ? 'Congrats!': 'You have already entered the contest!'
        })
    }

    clearForm = ()=>{
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            })
        },2000)
    }
    render() {
        const formElementArray = [];
        for(let key in this.state.emailForm){
            formElementArray.push({
                id: key,
                config:this.state.emailForm[key]
            })
        }
    
        let form = (
            <form onSubmit = {this.orderHandler}>
                {
                    formElementArray.map((el)=>(

                            <Input
                                key = {el.id}
                                elementType = {el.config.elementType}
                                elementConfig = {el.config.elementConfig}
                                value = {el.config.value}
                                changed = {(event)=>this.inputChangeHandler(event,el.id)}
                                isValid = {false}
                            />
                     ))
                }
                <div>
              
                </div>
                  
                <Button style = {{display:'inlineBlock'}} btnType = "Green">Submit Form</Button>
                <div>
                    {this.state.formSuccess}
                </div>
             
            </form>
        )

        return (
            <div className = {classes.ContactData}>
                
                    <h4>Enter Your Contact Data</h4>
                    {form}
               
            </div>
        );
    }
}

export default Email;