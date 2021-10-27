import React from "react"

const Title = () => {
  console.log("Rendering Title Component")
  return (
    <div>
      <h1>
        <u>Implementing useCallback Hook and React.memo:</u>
      </h1>
    </div>
  )
}

export default React.memo(Title)
