import './App.css'
import React, { useEffect} from 'react';
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Register from './Routes/Register/Register'
import Emergency from './Routes/Emergency/Emergency.jsx'
import Volunteers from './Routes/Search-volunteers/Voulunteers'

function App() {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/');
    ws.addEventListener('open',() =>{
      console.log("Connection Opened");
    })
    ws.addEventListener('error',(error)=>{
      console.log('WebSocket error' , error)
    })
    ws.addEventListener('message',(message)=>{
      const message2 = JSON.parse(message);
      console.log('Received message:', message2);
    })
    ws.addEventListener('close',()=>{
      console.log('Connection Closed')
    })
    
    
    return () => {
      ws.close();
    };
    
  }, []);

  return (
  
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/emergency" element={<Emergency />}/>
      <Route exact path="/search" element={<Volunteers />}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
