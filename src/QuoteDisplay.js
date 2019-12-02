import React from 'react';

function QuoteDisplay(props) {
    return(
        <div>
            <h1>{props.quote}</h1>
            <h4>— {props.author}</h4>
        </div>
    )
}

export default QuoteDisplay