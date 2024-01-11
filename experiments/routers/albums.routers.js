import { Router } from "express";
import tracks from "./tracks.routers.js"


const router = Router()

router.get("/", (req, res) => {
    console.log("the route is /albums/")
    res.send("thanks for visiting this route")
})

router.get("/:albumID", (req, res) => {
    let albumID = req.params.albumID
    console.log(albumID)

    res.send(`this is the album id you gave: ${albumID}`)
})

router.use("/:albumID/tracks", (req, res, next) => {
    req.albumID = req.params.albumID
    next()
}, tracks)

export default router