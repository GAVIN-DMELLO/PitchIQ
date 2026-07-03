import express from 'express';
import { createPlayerData } from '../controllers/dataController.js';

const router = express.Router();

router.post('/playerData', createPlayerData);

export default router;