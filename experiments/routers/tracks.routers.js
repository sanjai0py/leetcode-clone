import { Router } from "express"
const router = Router()

router.get("/", (req, res) => {
    let albumID = req.albumID 
    if (albumID){
        res.json({"data":albumID})
    }else{
        res.send({"data":"the albumID is null"})
    }
})

router.get("/:trackID", (req, res) => {
    let albumID = req.albumID 
    let trackID = req.params.trackID 
    
    res.json({"albumID":albumID, "trackID":trackID})
})

export default router