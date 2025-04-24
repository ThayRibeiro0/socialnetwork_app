import { Router } from 'express';
import { addReaction, deleteReaction} from '../../controllers/reactionController.js';
import { createThought, getThoughtsByUser } from '../../controllers/thoughtController.js';

const router = Router();

// /api/reactions
router.route('/').get(getThoughtsByUser).post(createThought);

// /api/reactions/:reactionId
router
    .route('/:reactionId')
    .post(addReaction)
    .delete(deleteReaction);
export { router as reactionRouter };
