import React from 'react';
import classes from './NewsItem';

const NewsItem = (props) => {
    const items = props.news.map((item)=>{
        return(
            <div className = {classes.NewsItem}>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    });

    return (
        <div>
            {items}            
        </div>
    );
};

export default NewsItem;