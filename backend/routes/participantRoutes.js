import express from 'express';
import { registerCollege, 
         registerSHS, 
         registerTeacher, 
         getColleges, 
         getSHS, 
         getTeachers, 
         getParticipantById,
         getAllParticipants,
         deleteParticipant } from '../controllers/participantControllers.js';

const router = express.Router();

router.post('/college', registerCollege);
router.post('/shs', registerSHS);
router.post('/teacher', registerTeacher);

router.get('/college', getColleges);
router.get('/shs', getSHS);
router.get('/teacher', getTeachers);

router.get('/:id', getParticipantById);
// router.get('/admin/all', getAllParticipants);
// router.delete('/admin/delete/:category/:id', deleteParticipant);

export default router;
