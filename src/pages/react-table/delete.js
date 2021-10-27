import axios from "axios"

const Delete = async (data) => {
  console.log("data", data)

  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    url: `http://localhost:8090/employee/${data._id}`
  }
  try {
    const { data } = await axios(options)
    console.log("deleted:", data)
  } catch (e) {
    console.error(e)
  }
}

export default Delete
