import { loginUser } from '../controllers/loginController.js';
import express from 'express';

const router = express.Router();

router.post('/', loginUser);

export default router;
