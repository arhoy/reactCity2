
import React, { Component } from 'react';
import classes from './News.css';
import JSON from '../../resources/data/db.json';
import NewsItem from './NewsItem/NewsItem';
import Padding from '../UI/Util/Padding/Padding';

class News extends Component {
    state = {
        news: JSON,
        filtered: []
    }
    inputChangeHandler = (e)=>{
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(e.target.value) > -1;
        });
        this.setState({filtered})
     //   console.log(filtered);
    }
    render() {
        let newsFiltered = this.state.filtered;
        let news = this.state.news;
        return (
            <div className = {classes.News}>
                    <Padding amountTop = '3rem'/>
                    <h2>Search for Customer</h2>
                    <input onChange = {this.inputChangeHandler} type="text"/>
                    <NewsItem news = {this.state.filtered.length === 0 ? this.state.news: this.state.filtered}/>
            </div>
        );
    }
}

export default News;