import { Router } from "express";
import *as postcontroller from './post.controller.js'

const router = Router()
router.post('/createpost',postcontroller.addpost)
router.get('/getpost',postcontroller.getpost)
router.delete('/deletepost',postcontroller.deletepost)
router.put('/updatepost',postcontroller.updatepost)
router.get('/specefic',postcontroller.getspecefic)


export default router