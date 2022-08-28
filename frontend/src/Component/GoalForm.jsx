/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'


function GoalForm() {
    const [text,setText]=useState('')
    const dispatch=useDispatch()
    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(createGoal({text}))
        setText('')
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">GOAL</label>
                <input type="text" name='text' id='text' value={text}
                onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button className='btn btn-block' type='submit'>
                    ADD GOAL
                </button>
            </div>
        </form>

    </section>
  )
}

export default GoalForm