import express from 'express';

import { getConditionsData } from '../controllers/pitch.getController.js';
import { postConditionsData } from '../controllers/pitch.postController.js';

const router = express.Router();


router.get('/getConditionsData' ,  getConditionsData )

router.post('/postConditionsData' , postConditionsData)

export default router;