/* eslint-disable no-unused-vars */
import React from 'react'
import {useEffect} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import GoalForm from '../Component/GoalForm'
import GoalItem from '../Component/GoalItem'
import Spinner from '../Component/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'


function Dashborad() {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const {user} = useSelector((state)=>state.auth)
  const {goals,isLoading,isError,message}=useSelector(state=>state.goals)
  useEffect(()=>{
    if(isError){
      console.log(message);
    }
      if(!user){
        navigate('/Login')
      }
      dispatch(getGoals())
      return ()=>{
        dispatch(reset())
      }
  },[user,navigate,isError,message,dispatch])
  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <>
     <section className="heading">
     <h1>Welcome {user && user.name}</h1>
     <p>Goals DASHBOARD</p>
     </section>
     <GoalForm></GoalForm>
     <section className="content">
      {goals.length>0 ?(
        <div className="goals">
          {goals.map(goal=>{
            return <GoalItem key={goal._id} goal={goal}/>
          })}
        </div>
      ):( <h3> YOU HAVE NOT SET ANY GOALS</h3>)}
     </section>
     
    </>
  )
}

export default Dashborad
