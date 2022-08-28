/* eslint-disable no-unused-vars */
import React from 'react'
import{FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout,reset } from '../features/auth/authSlice'

const Header = () => {
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const {user}= useSelector((state)=>state.auth)
    const onLogout =()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/Login')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to="/">GOALME.</Link>
        </div>
        <ul>
            {user?(
                 <li>
                 <button className='btn' onClick={onLogout}>
                     <FaSignOutAlt/> LOGIUT
                 </button>
             </li>
            ):(<>
             <li>
             <Link to="/Login">
                 <FaSignInAlt/> Login
             </Link>
         </li>
         <li>
             <Link to="/Register">
                 <FaUser/> Register
             </Link>
         </li>
            </>)}
           
        </ul>
    </header>
  )
}

export default Header