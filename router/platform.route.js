import express from 'express'
import { get_one_Platform_data ,get_all_Platforms} from "../controller/platform.controll.js"
const router = express.Router()

router.get('/one/:p_id',get_one_Platform_data)



router.get('/all_platform',get_all_Platforms)


export default router