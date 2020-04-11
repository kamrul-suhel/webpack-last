import {AppContainer} from 'react-hot-loader'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Counter from "./components/Counter";

const App = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(prevSate => {
            const newCounter = prevSate + 1
            return newCounter
        })
    }
    return (
        <div>
            <Counter/>
        </div>
    )
}

function render(Component){
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>
        ,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./components/Counter.js', () => {
        const newCounter = require('./components/Counter.js').default
        render(newCounter)
    });
}