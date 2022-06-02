import React, { useEffect, useState } from "react"
import Welcoming from "./Component/Welcoming"
import Quiz from "./Component/Quiz"
import { nanoid } from 'nanoid'

function App() {
  const [started, setStarted] = useState(false)
  const [question, setQuestion] = useState()
  const [questions, setQuestions] = useState()

  // After Clicking on the start button it will trigger this function to...
  // reverse the start useState(), map over the data we have to return 
  // Components with it's props
  function start () {
    setStarted(!started)
    setQuestions(() => {
      return question.map(item => {
        
        let allSuggestions = item.incorrect_answers
        let result = insert(allSuggestions, Math.floor(Math.random() * allSuggestions.length), item.correct_answer)

        return (
          <Quiz 
            key={nanoid()}
            id={nanoid()}
            question={item.question}
            correct={item.correct_answer}
            allSuggestions={result}
          />
        )
      })

    })
  }

  // This function is for insetting the correct answer in random index of the suggestions array.
  const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
  ]

  // Getting API data then insetting it to question useState()
  // It will run only once after the rendering is done done.
  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setQuestion(data.results)
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchData()
  }, [])
  
  return (
    <main className={started ? "app quiz-time" : "app"}>
      { !started && <Welcoming 
          handleClick={start}
        /> 
      }

      { started && 
        <div className="quiz">
          {questions}
            <button className="check">Check answers</button>
        </div>
      }
    </main>
  )
}

export default App;
