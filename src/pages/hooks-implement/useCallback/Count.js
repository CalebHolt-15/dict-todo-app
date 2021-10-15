import React from "react"

const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`)

  return (
    <div>
      <h2>
        {text} : {count}
      </h2>
    </div>
  )
}

export default React.memo(Count)
