import express from 'express'
import { get_all_niche ,get_one_niche_data} from "../controller/niche.controll.js"
const router = express.Router()

router.get('/one/:n_id',get_one_niche_data)



router.get('/all_niche',get_all_niche)


export default router