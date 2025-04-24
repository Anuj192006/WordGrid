import React, { useState } from 'react'
import {arr} from './Wordle.js'
import './Wordle.css'
const Words = (props) => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
  return (
    <div className='grid'>
        <input id='inputLetter1'></input>
        <input id='inputLetter2'></input>
        <input id='inputLetter3'></input>
        <input id='inputLetter4'></input>
        <input id='inputLetter5'></input>
    </div>
  )
}

export default Words
