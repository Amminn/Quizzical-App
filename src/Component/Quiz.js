import React from "react"
import Parser from 'html-react-parser'
import { nanoid } from 'nanoid'

export default function(props) {

  function google(e) {
    e.stopPropagation()
    console.log(e.target.innerHTML)
  }

  // onClick={(event) => {console.log(event.target.value)}}

  let suggestions = props.allSuggestions.map(item => {
    return <div
        onClick={() => {google(e)}}
        key={nanoid()}
        className="quiz__answers-answer"
      >
        {Parser(item)}
      </div>
  })

    return (
    <div className="quiz__question">
      <h3>{Parser(props.question)}</h3>
      <div className="quiz__answers">
        {suggestions}
      </div>
      <hr />
    </div> 
    )
}
