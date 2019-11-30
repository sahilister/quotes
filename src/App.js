import React from 'react';
import QuoteDisplay from './QuoteDisplay.js'
import quoteData from './quoteData'

function App() {
    const display = quoteData.map(data => 
        <QuoteDisplay quote={data.quote} author={data.author} />);

    return(
        <div>
            {display}
        </div>
    )
}

export default App