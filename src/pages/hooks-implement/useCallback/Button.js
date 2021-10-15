import React from "react"

const Button = ({ handleClick, children }) => {
  console.log("Rendering Button:", children)
  //children props refers to "Increment Age" text only

  return <button onClick={handleClick}>{children}</button>
}

export default React.memo(Button)
