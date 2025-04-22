import { Router } from 'express';
import { addReaction, deleteReaction} from '../../controllers/reactionController.js';

const router = Router();

// Add a reaction to a thought
router.post('/', addReaction);

// Delete a reaction from a thought
router.delete('/:reactionId', deleteReaction);

export default router;
