import { Container, Card } from "@material-ui/core"
import React from "react"

const Definitions = ({ meanings, word }) => {
  console.log("meanings##:", meanings)
  return (
    <Card>
      <Container size="md">
        <div>
          {word === "" ? (
            <span className="subTitle">Start by typing a word in search</span>
          ) : (
            meanings.map((mean) => (
              //** only Array can be MAPPED */
              <div>
                <b>Definition:</b>
                <p>{mean.definition}</p>

                <hr style={{ backgroundColor: "black", width: "100%" }} />
                <b>TYPE:</b>
                <p>{mean.type}</p>

                <hr style={{ backgroundColor: "black", width: "100%" }} />

                {mean.example && (
                  <>
                    <b>EXAMPLE:</b>
                    <p>{mean.example}</p>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </Container>
    </Card>
  )
}

export default Definitions
