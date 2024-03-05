import React from 'react'
import image from '../assets/image2.jpg'
import tee from '../assets/tee.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";


function Login() {

  const navigate = useNavigate()
  
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

      const Signinuser = (e) => {

        e.preventDefault()
        let url = "http://localhost:3000/user/signin"
        axios.post(url , 
        {
        email: Email,
        password: Password
        }).then((response)=> {
        console.log(response)
        navigate("/")
        }).catch((err)=>{
        console.log(err)
        })
       }

  return (
    <>
    <div className="px-1 lg:px-0">
    <div className='lg:flex lg:p-5 shadow-lg lg:mx-40 my-5 bg-green rounded-lg'>
    
      <div className=' flex flex-col items-center lg:px-5 bg-gray-50'>
        <h1 className='text-2xl font-semibold text-center text-nude my-2'> TWELVE'S CHARMS</h1>
        <img src={tee} alt="" className='text-green w-[130px]'/>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' text-2xl font-semibold text-nude'>SIGN IN</h1>
          <p className='text-sm text-green mt-2'>Sign in and enjoy your free 30 days trial</p>
          <form action="" className='flex flex-col space-y-6 mt-5'>
            <input type="text" placeholder='Email' className='parent'   autoComplete="on" onChange={(e)=>setEmail(e.target.value)}  />
            <input type="password" placeholder='Password'   autoComplete="on" className='parent' onChange={(e)=>setPassword(e.target.value)}  />
          </form>
          <p className='text-xs mt-2'><a href="#">Forgot Password?</a></p>
          <button className='px-8 py-2 bg-green hover:brightness-75 text-sm text-gray-200 my-5 rounded-md'onClick={Signinuser} >Log in</button>
        
         
        </div>
      </div>
      

      <div className='lg:w-[900px] h-[500px] bg-cover'>
      <img src={image} alt="background" className='w-full lg:w-[900px] h-[500px] brightness-75'/>
      </div>

    </div>
    </div>
    </>
  )
}

export default Login