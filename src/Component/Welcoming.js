import React from "react"

export default function Welcoming(props) {

  return (
    <div className="welcoming">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={props.handleClick}>Start quiz</button>
    </div> 
  )
}
