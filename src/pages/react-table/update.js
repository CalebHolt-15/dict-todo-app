import axios from "axios"

const UpdateFunction = async (data) => {
  console.log("data", data)

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    url: `http://localhost:8090/employee/${data._id}`
  }
  try {
    const { data } = await axios(options)
    console.log("updated:", data)
  } catch (e) {
    console.error(e)
  }
}

export default UpdateFunction
