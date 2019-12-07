import React from 'react';
import QuoteDisplay from './QuoteDisplay.js'
import quoteData from './quoteData'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function display() {
    let value = getRandomInt(0, 21); 
    <QuoteDisplay quote={quoteData[value].quote}author={quoteData[value].author} />
}

function App() {
    //Update values after adding new quotes.

    

    return(
        <div>
            display();
            {/* <button onClick={  }>New Aroma</button> */}
        </div>
    )
}
export default App


