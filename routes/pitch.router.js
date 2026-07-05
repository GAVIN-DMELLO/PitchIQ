import express from 'express';

import { getConditionsData } from '../controllers/pitch.getController.js';
import { postConditionsData } from '../controllers/pitch.postController.js';
import { postBatsmanData } from '../controllers/pitch.postBatsmanData.js';
import { getBatsmanData } from '../controllers/pitch.getBatsmanData.js';

const router = express.Router();


router.get('/getConditionsData' ,  getConditionsData )

router.post('/postConditionsData' , postConditionsData)

router.post('/postBatsmanData' , postBatsmanData)

router.get('/getBatsmanData' , getBatsmanData)

export default router;