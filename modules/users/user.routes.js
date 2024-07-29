import { Router } from "express";
import *as usercontroller from './user.contoller.js'

const router = Router()
router.post('/signup',usercontroller.adduser)
router.post('/signin',usercontroller.login)
router.patch('/logout',usercontroller.logout)


export default router