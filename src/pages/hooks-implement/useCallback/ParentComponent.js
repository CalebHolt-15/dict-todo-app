import React, { useState, useCallback } from "react"
import { Container } from "@material-ui/core"
import Title from "./Title"
import Count from "./Count"
import Button from "./Button"
import "./parent.css"

const ParentComponent = () => {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(25000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 15000)
  }, [salary])

  return (
    <Container>
      <div className="center">
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
      </div>
    </Container>
  )
}

export default ParentComponent

// <Title/> [no props/state => not re-render]
// <Button/> [props & state => re-render]
// <Count/> [props & state => re-render]

// => hence React.memo()...

//but when click (IncrementAge) Button, (IncrementSalary) Button also get re-render...
//and vise - versa. Beacuse each time the (ParentComponent) renders...
// NEW incrementAge() & incrementSalary() functions are created...
// hence we need to consider "Referenc Equality"...
//Q. How to not re-render the incrementAge() & incrementSalary() functions...
//   whenever (ParentComponent) re-renders ?...

// => hence useCallback()...

// which will cache a fxn...
// if it's props or dependencies change then only...
// it will render that fxn otherwise it won't render that fxn.

// incrementAge() & incrementSalary() functions are "Referenc Equality" ???...
// => hence they only are wrapped in useCallback() ???

// Only incrementAge() & incrementSalary() fxns used useCallBack() because...
// it's not good to use it everywhere...
// https://kentcdodds.com/blog/usememo-and-usecallback.

//tyL
