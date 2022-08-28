import React from "react";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./Component/Header";
import Dashborad from "./pages/Dashborad";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Router>
    <div className="container" >
      <Header></Header>
    <Routes>
      <Route path='/' element={<Dashborad/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </div>
    </Router>
    <ToastContainer></ToastContainer>
      
    </>
   
  );
}

export default App;
