import express from 'express';
import { cartGet, cartCreate, cartUpdate, cartDelete } from '../controllers/cartController.js';
import {tokenExtractor} from '../utils/middleware.js'

const router = express.Router();

router.get('/', cartGet);
router.post('/', tokenExtractor, cartCreate);
router.put('/:id', tokenExtractor, cartUpdate);
router.delete('/:id', tokenExtractor, cartDelete);

export default router;