import { Router } from 'express';
const router = Router();
import {
    getAllThoughts,
    createThought,
    getThoughtsByUser,
    getThoughtById,
    updateThought,
    deleteThought
} from '../../controllers/thoughtController.js';

// /api/thoughts
router.route('/').get(getAllThoughts);

// // /api/thoughts
router.route('/users/:userId/thoughts')
.get(getThoughtsByUser)
.post(createThought);

// // /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

export { router as thoughtRouter };
