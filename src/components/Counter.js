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
        <div className="card" onClick={()=> handleCount()}>
            <div className="cardHeader">
                <h2>Content Title Change Some more</h2>
            </div>
            <div className="cardContent">
                <img src={images.LinkImage}/>
                <h3 style={{textAlign:'center'}}>{counter}</h3>
            </div>
        </div>
    )
}

export default Counter