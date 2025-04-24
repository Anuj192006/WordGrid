import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './Components/Login/Login';
import Navigator from "./Components/Navigator/Navigator";
import Wordle from "./Components/Wordle/Wordle";
import Connection from "./Components/Connection/Connection";
import Profile from "./Components/Profile/Profile";
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
