import express from 'express';
const router = express.Router();

// importing base routes
import adminRoutes from './admin.routes.js';

// defining routes
router.use('/admin', adminRoutes);

// exporting router
export default router;
