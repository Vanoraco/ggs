
import { Router } from "express"
import { sample_course } from "../data";

const router = Router();

router.get("/", (req, res) => {
    res.send(sample_course)
})

export default router