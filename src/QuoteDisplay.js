import React from 'react';

function QuoteDisplay(props) {
    return(
        <div>
            <h2>{props.quote}</h2>
            <h4>-- {props.author}</h4>
        </div>
    )
}

export default QuoteDisplay