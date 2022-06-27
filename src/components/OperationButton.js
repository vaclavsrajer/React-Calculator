import React from 'react'
import { ACTIONS } from '../App'
import "./Button.css"

export default function OperationButton({operation, dispatch}) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})} className='buttons'>{operation}</button>
  )
}
