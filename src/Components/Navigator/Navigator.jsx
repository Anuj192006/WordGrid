import React from 'react'
import './Navigator.css'
import { useNavigate } from 'react-router-dom';
const Navigator = () => {
  const navigate= useNavigate();
  function handleWordle(){
    navigate('/wordle');
  }
  function handleConnection(){
    navigate('/connection');
  }
  return (
    <div className="navigator">
      <div className="cardOne">
        <img src="dummy.png" alt="" onClick={handleWordle}/>
      </div>
      <div className="cardOne">
        <img src="image2.png" alt="" onClick={handleConnection}/>
      </div>
    </div>
  )
}

export default Navigator
