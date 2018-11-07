import React, { Component } from 'react';
import Counter from './Counter/Counter';

class Counters extends Component {
    state = {
        counters:[
            {id:1, value:1},
            {id:2, value:2},
            {id:3, value:0},
            {id:4, value:100}
        ]
    }

    deleteEventHandler = (counterToDelete)=>{
        console.log('delete me',counterToDelete);
        // remove counter from UI
        const counters = this.state.counters.filter(counter=> counter.id !==counterToDelete.id);
        // update the state
        this.setState({counters})

    }
    render() {
        return (
            <div>
               {this.state.counters.map(counter=>(
                   <Counter key = {counter.id} value = {counter.value} onDelete = {()=>{this.deleteEventHandler(counter)} } selected = {true}>Counter {counter.id}</Counter>
               ))}
            </div>
        );
    }
}

export default Counters;