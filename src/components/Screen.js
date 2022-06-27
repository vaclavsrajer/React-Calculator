import React from "react";
import "./Screen.css"

export default function Screen(props) {
  return (
    <div className="screen">
      <div className="screen-top">{props.previousOperand} {props.operation}</div>
      <div className="screen-bottom">{props.currentOperand}</div>
    </div>
  );
}
