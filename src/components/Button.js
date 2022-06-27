import React from 'react'
import { ACTIONS } from '../App'
import "./Button.css"

export default function Button({digit, dispatch}) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit}})} className='buttons'>{digit}</button>
  )
}
