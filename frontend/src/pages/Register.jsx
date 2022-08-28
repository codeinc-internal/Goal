/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../Component/Spinner'
import { register,reset } from '../features/auth/authSlice'
const Register = () => {
  const [formData,setformData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const navigate=useNavigate()
  const dispatch  = useDispatch()
  const {name,email,password,password2}=formData
  const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>
     state.auth
  )
  const onChange=(e)=>{
      setformData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value

      }))
  }

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess||user){
      navigate('/')
    }
    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(password!==password2){
      toast.error('password do not match')
    }
    else{
      const userData={
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }
  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <>
    <section className="heading">
      <h1>
        <FaUser/> Register
      </h1>
      <p>PLEASE CREATE AN ACCOUNT</p>
    </section>

    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input type="text" className="form-control" id="name" name='name'  value={name} placeholder='Enter your name'
          onChange={onChange}/>
        </div>
        <div className="form-group">
        <input type="email" className="form-control" id="email" name='email'  value={email} placeholder='Enter your email'
          onChange={onChange}/>
        </div>
        <div className="form-group">
        <input type="password" className="form-control" id="password" name='password'  value={password} placeholder='Enter your password'
          onChange={onChange}/>
        </div>
        <div className="form-group">
        <input type="password" className="form-control" id="password2" name='password2'  value={password2} placeholder='Enter ConfirmPassword'
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

export default Register