import React from "react"

export const Dictionary = () => {
  const getMeaning = async() => {
    const token = "4a28185989b701a7fed9c3757ee749439c5694ee"
    const options = {
      method: "POST",
      Headers: {
        Authorization: `Token ${token}`,
      },
    }

    try {
      const data = await axios
    }



  }

  return (
    <div>
      <h1>Dictionary</h1>
    </div>
  )
}

export default Dictionary
