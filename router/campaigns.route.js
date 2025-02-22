import express from "express";
import  {add_to_campaign, get_all_campaigns,get_campaign_by_c_id , delete_c_id , update_c_id_data} from '../controller/campaigns.controll.js'
import multer from 'multer';

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() });

router.get('/of/:email/:c_id' , )
 




router.post('/new_campaign',upload.single('img_or_vid'),add_to_campaign)

router.get('/all',get_all_campaigns)
router.get('/one/:c_id',get_campaign_by_c_id)

router.delete('/delete/:c_id', delete_c_id )

router.put('/update/:c_id',upload.single('img_or_vid'),update_c_id_data)




export default router