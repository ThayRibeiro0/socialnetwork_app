import { Router } from 'express';
import {
    createThought,
    getThoughtsByUser,
    getThoughtById,
    updateThought,
    deleteThought
} from '../../controllers/thoughtController.js';

const router = Router();

router.post('/', createThought);
router.get('/', getThoughtsByUser);
router.get('/thoughtId', getThoughtById);
router.put('/thoughts/:thoughtId', updateThought);
router.delete('/thoughts/:thoughtId', deleteThought);

export default router;
