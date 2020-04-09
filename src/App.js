import { AppContainer } from 'react-hot-loader'
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
        <div onClick={() => handleClick()}>
            <h2>React test live change data</h2>
            <h4>{counter}</h4>

            <Counter/>
        </div>
    )
}

function render(Component){
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)