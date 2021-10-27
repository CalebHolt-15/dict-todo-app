import React, { useState, useMemo } from "react"
import { Container } from "@material-ui/core"

const CounterUseMemo = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  // const isEven = () => {
  //   let i = 0
  //   while (i < 2000000000) i++
  //   return counterOne % 2 === 0
  // }

  return (
    <Container>
      <h1>
        <u>useMemo Hook:</u>
      </h1>
      <div>
        <div>
          <button onClick={incrementOne}>
            <h2> CounterOne: {counterOne}</h2>
          </button>
          <span>{isEven ? <h4>Even</h4> : <h4>Odd</h4>}</span>
        </div>
        <div>
          <button onClick={incrementTwo}>
            <h2> counterTwo: {counterTwo}</h2>
          </button>
        </div>
      </div>
    </Container>
  )
}

export default CounterUseMemo
