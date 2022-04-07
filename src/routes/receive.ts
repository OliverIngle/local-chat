import express from 'express';
import receiver from '../controllers/receiverController';

const router = express.Router();
router.post('/', receiver);

export default router;