import express from 'express';
import { get_all_Groups, get_one_Groups_data } from '../controller/groups.controll.js';

const router = express.Router();

// Route to get one group by ID
router.get('/one/:g_id', get_one_Groups_data);

// Route to get all groups
router.get('/all_groups', get_all_Groups);

export default router;
