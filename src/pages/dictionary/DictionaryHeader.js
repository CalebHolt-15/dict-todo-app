import { debounce } from "@material-ui/core"
import { createTheme, TextField, ThemeProvider } from "@material-ui/core"
import React from "react"
import "./Dictionary.css"

const DictionaryHeader = ({ word, setWord, setMeanings }) => {
  const darkTheme = createTheme({
    palette: {
      type: "light",
    },
  })

  const handleText = debounce((text) => {
    setWord(text)
  }, 500)

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Search"}</span>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="search"
            label="Search a Word"
            // value={word}
            onChange={(e) => handleText(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default DictionaryHeader
