import { Router } from 'express';
import userRoutes from './userRoutes.js';      //Routes to users
import thoughtRoutes from './thoughtRoutes.js'; // Routes to thoughts
import reactionRoutes from './reactionRoutes.js'; // Routes to reactions

const router = Router();

// Using the routes
router.use('/users', userRoutes);            // Routes to users
router.use('/thoughts', thoughtRoutes);      // Routes to thoughts
router.use('/thoughts/:thoughtId/reactions', reactionRoutes);  // Routes to reactions

export default router;
