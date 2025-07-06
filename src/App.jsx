import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './Components/Login/Login';
import Navigator from "./Components/Navigator/Navigator";
import Connection from "./Components/Connection/Connection";
import Profile from "./Components/Profile/Profile";
import Wordle from "./Wordle/minicomponents/Wordle.jsx";
function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/navigator" element={<Navigator/>}></Route>
      <Route path="/wordle" element={<Wordle/>}></Route>
      <Route path="/connection" element={<Connection/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
      </Router>
    
  )
}

export default App
