
import { Router } from "express";
import { sample_teacher } from "../data";

const router = Router();

router.get('/', (req, res) => {
   res.send(sample_teacher)
})

export default router