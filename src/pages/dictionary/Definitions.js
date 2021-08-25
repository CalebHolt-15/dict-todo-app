import { Container } from "@material-ui/core"
import React from "react"

const Definitions = ({ meanings, word }) => {
  console.log("meanings##:", meanings)
  return (
    <Container>
      <div>
        {word === "" ? (
          <span className="subTitle">Start by typing a word in search</span>
        ) : (
          meanings.map((mean) => (
            //** only Array can be MAPPED */
            <div>
              <b>Definition:{mean.definition}</b>
              <hr style={{ backgroundColor: "black", width: "100%" }} />
              <b>Type:{mean.type}</b>
              <hr style={{ backgroundColor: "black", width: "100%" }} />

              {mean.example && <b>Example:{mean.example}</b>}
            </div>
          ))
        )}
      </div>
    </Container>
  )
}

export default Definitions
