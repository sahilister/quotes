import React from 'react';
import QuoteDisplay from './QuoteDisplay.js'
import quoteData from './quoteData'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

// function display() {
    
// }

// function App() {
//     //Update values after adding new quotes.

    

//     return(
//         <div>
//             display();
//             <button onClick={display}  >New Aroma</button> 
//         </div>
//     )
// }

class App extends React.Component {
    render(){
        const value = getRandomInt(0, 21); 
        return(
            <div>
                
                <QuoteDisplay quote={quoteData[value].quote}author={quoteData[value].author} />
            </div>
        )
    }
}
export default App


