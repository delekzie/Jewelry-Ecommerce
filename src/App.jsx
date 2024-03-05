import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import User from './Components/User';
import Login from './Components/Login';
import Footer from './Components/Footer';
import About from './Components/About';
import Care from './Components/Care';
import Terms from './Components/Terms';
import Return from './Components/Return';
import Dashboard from './Components/Dashboard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
      /> 



    <Navbar/>
    <Routes>
        <Route path="/signuser" element={<User/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/care" element={<Care/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path="/" element={<Dashboard/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App