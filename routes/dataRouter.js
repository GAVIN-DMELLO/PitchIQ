import express from 'express';
import { createPlayerData } from '../controllers/dataController.js';
import { getUserData } from '../controllers/playerController.js';
import { writeConditionsData } from '../controllers/writeController.js';

const router = express.Router();

router.post('/playerData', createPlayerData);

router.get('/getData' , getUserData);

router.post('/writeConditionsData' , writeConditionsData )

export default router;