import express from 'express';
const router = express.Router();

// importing base routes
import sellerRoutes from './seller.routes.js';

// defining routes
router.use('/seller', sellerRoutes);

// exporting router
export default router;
