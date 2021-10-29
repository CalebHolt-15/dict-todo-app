import { Container } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"

export const Display = () => {
  const [displayData1, setDisplayData1] = useState()
  const [displayData2, setDisplayData2] = useState()

  //********    Read *************/
  useEffect(() => {
    const getData = async () => {
      console.log("getData")
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // url: "/api1/TODO/todo2"
        // url: "/api1/todo2"
        url: "/api1/TODO/todo1"
      }
      try {
        const { data } = await axios(options)
        console.log("1:", data)
        setDisplayData1(data)
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }, [])

  //********   Read *************/
  useEffect(() => {
    const getData2 = async () => {
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        url: "/api2/employee/hello"
      }
      try {
        const { data } = await axios(options)
        console.log("2:", data)
        setDisplayData2(data)
      } catch (e) {
        console.error(e)
      }
    }
    getData2()
  }, [])

  return (
    <Container>
      <div>
        <h1>
          <u>DisplayData from server1,api1&2: </u>
        </h1>
        <b>{displayData1}</b>
      </div>
      <div>
        <h1>
          <u>DisplayData from server2,api1&2: </u>
        </h1>
        <b>{displayData2}</b>
      </div>
    </Container>
  )
}

export default Display
