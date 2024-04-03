import express from 'express';
const router = express.Router();

// importing base routes
import whishlistRoutes from './whishList.routes.js';

// defining routes
router.use('/whishList', whishlistRoutes);

// exporting router
export default router;
