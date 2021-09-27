import { Container } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import DictionaryHeader from "./DictionaryHeader"
import Definitions from "./Definitions"

export const Dictionary = () => {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])

  const getMeaning = async () => {
    const token = "4a28185989b701a7fed9c3757ee749439c5694ee"
    const options = {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
      url: `https://owlbot.info/api/v4/dictionary/${word}`,
    }

    try {
      const data = await axios(options)
      console.log("data.data//", data.data)
      setMeanings(data.data.definitions) //** only Array can be MAPPED */
    } catch (err) {
      console.log("err:", err)
    }
  }
  useEffect(() => {
    getMeaning()
  }, [word])

  console.log("meanings...:", meanings)

  return (
    <div>
      <Container>
        <DictionaryHeader
          word={word}
          setWord={setWord}
          setMeanings={setMeanings}
        />
        <br></br>
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            setMeaning={setMeanings}
          />
        )}
      </Container>
    </div>
  )
}

export default Dictionary
