import React, { Component } from 'react';
import classes from './Counter.css';

class Counter extends Component {
    state = {
        value:this.props.value
    }

    addCount = ()=>{
        this.setState({value:this.state.value+1});
    }
    subtractCount = ()=>{
        if(this.state.value > 0){
            this.setState({value:this.state.value-1});
        }
       
    }
    render() {
        console.log('props',this.props);
        return (
            <div className = {classes.Counter}>
                {this.props.children}
                <div className = {classes.Value}>
                     {this.state.value}
                </div>
                <button className = {[classes.Button,classes.ButtonAdd].join(' ')} onClick = {this.addCount}>Add</button>
                <button className = {[classes.Button,classes.ButtonSubtract].join(' ')} onClick = {this.subtractCount} >Subtract</button>
                <button className = {[classes.Button,classes.ButtonDelete].join(' ')} onClick = {this.props.onDelete} >Delete Counter</button>
            </div>
        );
    }
}

export default Counter;