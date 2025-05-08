import express from 'express';
import { registerCollege, registerSHS, getColleges, getSHS, getParticipantById } from '../controllers/participantControllers.js';

const router = express.Router();

router.post('/college', registerCollege);
router.post('/shs', registerSHS);
router.get('/college', getColleges);
router.get('/shs', getSHS);
router.get('/:id', getParticipantById);

export default router;
