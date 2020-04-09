import React, {useState} from 'react'
import images from '../staticImages'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCount = () => {
        setCounter(preState => {
            return preState + 1
        })
    }
    return (
        <div>
            <img src={images.Image2}/>
            <h3 onClick={()=> handleCount()}>asd Counter component</h3>
            <h4>{counter}</h4>
        </div>
    )
}

export default Counter