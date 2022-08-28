/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../Component/Spinner'
import { login,reset } from '../features/auth/authSlice'

const Login = () => {
  const [formData,setformData]=useState({
  
    email:'',
    password:'',
  
  })
  const navigate=useNavigate()
  const dispatch  = useDispatch()
 
  const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>{
    return state.auth
  })
  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess||user){
      navigate('/')
    }
    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])
  const {email,password}=formData
  const onChange=(e)=>{
      setformData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value

      }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const userdata={
      email,
      password
    }
    dispatch(login(userdata))
   
  }
  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <>
    <section className="heading">
      <h1>
        <FaSignInAlt/>LOGIN
      </h1>
      <p>LOGIN IN AND SET YOUR GOALS</p>
    </section>

    <section className="form">
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
        <input type="email" className="form-control" id="email" name='email'  value={email} placeholder='Enter your email'
          onChange={onChange}/>
        </div>
        <div className="form-group">
        <input type="password" className="form-control" id="password" name='password'  value={password} placeholder='Enter your password'
          onChange={onChange}/>
        </div>
        
         <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
         </div>
      </form>
    </section>
    </>
  )
}

export default Login