import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import classes from './ContactData.css';
import Button from '../UI/Button/Button';
//import { FormControlLabel } from '@material-ui/core';

class ContactData extends Component {
    state = {
        orderForm:{
            name:{
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder:'Your Name'
                },
                value: ''
            },
            street:{
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder:'Street'
                },
                value: ''
            },
            zipCode:{
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder:'Zip or Postal Code'
                },
                value: ''
            },
            country:{
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder:'Country'
                },
                value: ''
            },
            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder:'Your Email'
                },
                value: ''
            },
            deliveryMethod:{
                elementType: 'select',
                elementConfig:{
                    options: [
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapest',displayValue:'Cheapest'}
                    ]
                },
                value: 'Fastest'
            }

        }
    }

    orderHandler = (e) =>{
        e.preventDefault();
        const formData = {};
        for(let i in this.state.orderForm){
            formData[i] = this.state.orderForm[i].value;
        }
        console.log(formData);
        console.log('thank you for your order');
    }
    inputChangeHandler = (event,inputIdentifier) =>{
        // create deep copy of the state
        const updatedOrderForm = {...this.state.orderForm};
        // copy of the second tier... we are not changing the element config only the value, so we don't need to clone that deeply
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        // update the second tier
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        //update the state
        this.setState({orderForm:updatedOrderForm});

    }
    render() {
        const formElementArray = [];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config:this.state.orderForm[key]
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
                            />
                     ))
                }
                <Button btnType = "Green">Submit Form</Button>
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

export default ContactData;