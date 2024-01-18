const cors = require("cors")
const express = require("express")
require("dotenv").config()  

const authRoute  = require("./routes/auth.route.js")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("this is the root route and it works")
})

app.use("/api/v1/auth", authRoute)

app.listen(PORT, (req, res) => {
    console.log(`the server is listening on PORT ${PORT}`)
})