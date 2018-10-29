import React, { Component } from 'react';
import classes from './Pricing.css';
import Button from '../UI/Button/Button';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {

    state = {
        prices: [9.99,14.99,19.99],
        header: ['Starter','Basic','Premium'],
        description: [
            'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
            'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber',
            'Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.'
        ],
        linkTo: ['https://en.wikipedia.org/wiki/Robotic_process_automation'
                ,'https://trello.com/b/rD9ztooJ/bimi-team'
                ,'https://en.wikipedia.org/wiki/Robotic_process_automation#Historic_evolution'
                ],
        delay:[500,0,250]
    }
    showBoxes = () =>{
        const boxes = [...this.state.prices];
        console.log(boxes);
        return (
            boxes.map((box,i)=>(
                <Zoom key = {i} duration = {500} delay = {this.state.delay[i]}>
                     <div className = {classes.Pricing}>
                        <h2>{this.state.header[i]}</h2>
                        <div>
                            <span>${this.state.prices[i]}</span>
                        </div>
                        <p>{this.state.description[i]}</p>
                        <Button btnType = 'Green'>Order Now</Button>
                    </div>

                </Zoom>
               
            )   
        ))
    }
       
    render() {
        return (
            <div>
                {this.showBoxes()}
            </div>
        );
    }
}

export default Pricing;