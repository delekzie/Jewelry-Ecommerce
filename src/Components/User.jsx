import React, { useState } from 'react'
import backgroundImage from '../assets/image1.jpg'
import tee from '../assets/tee.png'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

    

function User() {


  const navigate = useNavigate()

  const [username, setusername ] = useState('')
  const [email, setemail ] = useState('')
  const [password, setpassword ] = useState('')
  const [confirmPassword, setconfirmPassword ] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
     if(username == "" || email == "" || password == "" && password < 6)
     {
      disp.innerHTML = "Enter your Fullname"
      display.innerHTML = "Enter your Email"
      show.innerHTML = "Minimum of 6 characters"
      setTimeout(() => {
          disp.innerHTML = ""
          display.innerHTML = ""
          show.innerHTML = ""
      }, 3000);
     }else if(password != confirmPassword){
      viewer.innerHTML = "Password and Confirm Password must be same"
     }
    else{
      let url = "http://localhost:3000/user/registration"
      axios.post(url, 
          {
              username: username,
              email: email,
              password: password,
              confirmPassword: confirmPassword
          }).then((response) =>{
              console.log(response)
              if(response.data.status == true) {
                toast.success(response.data.message)
              navigate("/login")
              } else {
                toast.success(response.data.message)
              navigate("/signuser")
              }
          }).catch((err)=>{
              console.log(err)
              toast.success(response.data.message)
          })
      }
  }


  return (
    <>
    <div className="px-1 lg:px-0">
    <div className='lg:flex lg:p-5 shadow-lg lg:mx-40 my-5 bg-nude rounded-lg'>
      <div className='lg:w-[900px] h-[500px]'>
      <img src={backgroundImage} alt="background" className='w-full lg:w-[900px] h-[500px] brightness-75'/>
      </div>
      <div className=' flex flex-col items-center lg:px-5 bg-gray-50'>
        <h1 className='text-2xl font-semibold text-center text-green my-2'> TWELVE'S CHARMS</h1>
        <img src={tee} alt="" className='w-[130px]'/>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' text-2xl font-semibold text-green'>SIGN UP</h1>
          <form action="" className='flex flex-col space-y-6'>
          <div>
          <input type="text" placeholder='Name' className='transparent'   autoComplete="on" onChange={(e)=>setusername(e.target.value)} />
                <div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="disp"></div>
          </div>
            <div>
            <input type="text" placeholder='Email' className='transparent'   autoComplete="on" onChange={(e)=>setemail(e.target.value)}/>
            <div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="display"></div>
            </div>
           <div>
           <input type="password" placeholder='Password' className='transparent'   autoComplete="on" onChange={(e)=>setpassword(e.target.value)}/>
           <div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="show"></div>
           </div>
            <div>
            <input type="password" placeholder='Confirm Password'className='transparent'   autoComplete="on" onChange={(e)=>setconfirmPassword(e.target.value)} />
            <div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="viewr"></div>
            </div>
          </form>
          <button className='px-4 py-2 bg-carton hover:brightness-75 text-sm text-gray-200 mt-5 rounded-md' onClick={handleSubmit}>Create Account</button>
          <p className='text-xs my-4 '>Already have an account? <Link to="/login" className='font-semibold ' >Login</Link></p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default User