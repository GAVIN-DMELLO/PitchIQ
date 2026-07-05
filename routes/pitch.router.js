import express from 'express';

import { getConditionsData } from '../controllers/pitch.getController.js';
import { postConditionsData } from '../controllers/pitch.postController.js';
import { postBatsmanData } from '../controllers/pitch.postBatsmanData.js';

const router = express.Router();


router.get('/getConditionsData' ,  getConditionsData )

router.post('/postConditionsData' , postConditionsData)

router.post('/postBatsmanData' , postBatsmanData)

export default router;