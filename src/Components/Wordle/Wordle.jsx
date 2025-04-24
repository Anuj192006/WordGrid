import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Wordle.css'
import Words from './Words.jsx'
import {arr} from './Wordle.js'
const Wordle = () => {
    let randomInt= Math.floor(Math.random()*arr.length)
    let word=arr[randomInt]
    const WordList=[]
    for (let i of word){
        WordList.push(i)
    }
  return (
    <div>
        <Navbar/>
        <div className="wordle">
            <div className="wordgrid">
                <Words WordList={WordList}/>
                <Words WordList={WordList}/>
                <Words WordList={WordList}/>
                <Words WordList={WordList}/>
                <Words WordList={WordList}/>
                <Words WordList={WordList}/>
            </div>
        </div>
    </div>
  )
}

export default Wordle
