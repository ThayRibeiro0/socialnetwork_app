import { Router } from 'express';
import {
    createThought,
    getThoughtsByUser,
    getThoughtById,
    updateThought,
    deleteThought
} from '../../controllers/thoughtController.js';

const router = Router();

router.post('/thoughts', createThought);
router.get('/thoughts/user/:userId', getThoughtsByUser);
router.get('/thoughts/:thoughtId', getThoughtById);
router.put('/thoughts/:thoughtId', updateThought);
router.delete('/thoughts/:thoughtId', deleteThought);

export default router;
