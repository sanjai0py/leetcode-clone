import express from "express"
const app = express()
const PORT = 8080


// Routes
import albumRouter from "./routers/albums.routers.js"


app.get("/", (req, res) => {
	res.send("this is the root route")
})

app.use("/albums", albumRouter)

app.listen(PORT, () =>{
	console.log(`the server is running on ${PORT}`)
}) 

