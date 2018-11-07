import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case ('input'):
            inputElement = <input className = {classes.inputElement} {...props.elementConfig} value = {props.value} onChange ={props.changed}/>
        break;
        case('textarea'):
            inputElement = <textarea className = {classes.inputElement} {...props.elementConfig} value = {props.value} onChange ={props.changed}/>
        break;
        case('select'):
            inputElement = (
                <div>
                    <div> {props.elementConfig.displaylabel === "Yes" ? props.elementConfig.label : null }</div>
                    <select 
                    className = {classes.inputElement}
                    value = {props.value}
                    onChange ={props.changed}
                        >
                        {props.elementConfig.options.map(option=>(
                            <option key = {option.value} value = {option.value} disabled = {option.disabled} hidden = {option.hidden} selected = {option.selected}>
                                {option.displayValue}
                            </option>
                    
                        ))}
                    </select>
                </div>
             
            )
            break;
         case ('inputwLabel'):
            inputElement = 
            <div>
                   <div> {props.elementConfig.displaylabel === "Yes" ? props.elementConfig.label : null }</div>
                   <input className = {classes.inputElement} {...props.elementConfig} value = {props.value} onChange ={props.changed}/>            
            </div>
          break; 
      
        default: 
            inputElement = <input className = {classes.inputElement} {...props.elementConfig} value = {props.value} onChange ={props.changed}/>
    }

    return (
      
        <div className = {classes.Input}>
            <label className = {classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;