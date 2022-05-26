import React, { useEffect } from "react"
import Welcoming from "./Component/Welcoming"
// import { Quiz } from "./Component/Quiz"
import { nanoid } from 'nanoid'

function App() {
  // Starting our Quiz test

  return (
    <main className={start ? "app quiz-time" : "app"}>
      {!start && <Welcoming 
        handleClick={quizStart}
      />}
      <div className="quiz">
        <div className="quiz__question">
          <h3>hello this is me so what do you think!</h3>
          <div className="quiz__answers">
            <button className="quiz__answers-answer correct">Hola</button>
            <button className="quiz__answers-answer ignore">Hello</button>
            <button className="quiz__answers-answer ignore">مرحبا</button>
            <button className="quiz__answers-answer wrong">Nehaw</button>
          </div>
          <hr />
        </div>
        <button className="check">Check </button>
      </div>

      {/* { start && <div className="quiz"> {render} <button className="check">Check answers</button></div> } */}
    </main>
  )
}

export default App;
