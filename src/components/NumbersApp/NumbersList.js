import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { decrementNumber,incrementNumber, removeNumber } from '../../actions/numbersAction'

const NumbersList = (props) => {
    const dispatch = useDispatch()

    const numbers = useSelector((state) => {
        return state.numbers
    })

    const handleDecrement = (id) => {
        dispatch(decrementNumber(id))
    }
    const handleIncrement = (id) => {
        dispatch(incrementNumber(id))
    }
    const handleRemove = (id) => {
        dispatch(removeNumber(id))
    }
    
    return (
        <div>
            <h2>NumbersList comp</h2>
            <ul>
                {
                    numbers.map((num) => {
                        return <li key={num.id}> {num.value} 
                        <button onClick={() =>{
                            handleDecrement(num.id)
                        }}> - </button>
                        <button onClick={() =>{
                            handleIncrement(num.id)
                        }}> + </button>
                        <button onClick={() =>{
                            handleRemove(num.id)
                        }}> x </button> 
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default NumbersList