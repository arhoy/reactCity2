import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './SignIn.css';
import {firebase} from '../../resources/firebase';
import {withRouter} from 'react-router-dom';



class SignIn extends Component {

    state = {
        formError:false,
        formSuccess:"",
        formData:{

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
            },
            password:{
                elementType: 'input',
                elementConfig:{
                    type: 'password',
                    placeholder:'Password'
                },
                value: '',
                validation:{
                    required:true
                },
                isValid:false,
                validationMessage:null
            }
        }
    }


    inputChangeHandler = (event,inputIdentifier) =>{
      
        // create deep copy of the state
        const updatedForm = {...this.state.formData};
        // copy of the second tier... we are not changing the element config only the value, so we don't need to clone that deeply
        const updatedFormElement = {...updatedForm[inputIdentifier]};
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
 
        updatedForm[inputIdentifier] = updatedFormElement;

        //update the state
        this.setState({formData:updatedForm}); 
    }
    
    submitForm = (e) =>{
        e.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;
        for (let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].isValid && formIsValid;
        }
       
        if(formIsValid){
            // send user to the dashboard
      
            firebase.auth()
                .signInWithEmailAndPassword(
                    dataToSubmit.email,
                    dataToSubmit.password
                )
                .then(()=>{
                    console.log('I logged in',dataToSubmit);
                    this.props.history.push('/dashboard');

                })
                .catch(err=>{
                    this.setState({
                        formError:true,
                        validationMessage:'Wrong Email and/or Password! please try again'
                    })
                })
        }
        else{
            console.log('There was an error with login');
        }
    }
    render() {
        const formElementArray = [];
        for(let key in this.state.formData){
            formElementArray.push({
                id: key,
                config:this.state.formData[key]
            })
        }
    
        let form = (
            <form onSubmit = {(e) =>{this.submitForm(e)} }>
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
                  
                <Button btnType = "Green">Login</Button>
                <div>
                    {this.state.validationMessage}
                </div>
             
            </form>
        )

        return (
            <div className = {classes.SignIn}>
                <h4>Sign In</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(SignIn);