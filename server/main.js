import express from "express"
import * as cors from "cors"

const app = express()
const PORT = 8000

app.use("/", (req, res) => {
    res.send("this is the root route and it works")
})


app.listen(PORT, (req, res) => {
    console.log(`the server is listening on PORT ${PORT}`)
})