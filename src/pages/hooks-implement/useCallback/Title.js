import React from "react"

const Title = () => {
  console.log("Rendering Title Component")
  return (
    <div>
      <h1>Implementing useCallback Hook</h1>
    </div>
  )
}

export default React.memo(Title)
