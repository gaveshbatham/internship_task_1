import express from 'express'
import {get_user_data ,get_all_users,get_all_campaigns_of_user } from '../controller/user.controll.js'

const router  = express.Router()


router.get('/one/:email',get_user_data)

router.get('/all_user',get_all_users )

router.get('/campaign/:email' , get_all_campaigns_of_user)

export default router;