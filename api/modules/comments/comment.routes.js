import { Router } from "express";
import *as commentcontroller from './comment.controller.js'

const router = Router()
router.post('/addcomment',commentcontroller.addcomment)
router.get('/getcomment',commentcontroller.getcomment)
router.put('/updatecomment',commentcontroller.updatecomment)
router.delete('/deletecomment',commentcontroller.deletecomment)
router.get('/specefic',commentcontroller.getspeceficcomment)




export default router