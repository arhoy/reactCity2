import React from 'react';

const Padding = (props) => {
    return (
        <div style = {
            {   
                paddingTop: props.amountTop,
                paddingBottom: props.amountBottom,
                paddingRight: props.amountRight,
                paddingLeft: props.amountLeft,
            }
    
        }>
            
        </div>
    );
};

export default Padding;