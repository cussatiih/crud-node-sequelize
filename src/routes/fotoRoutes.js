import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import fotoController from '../controllers/FotoController';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);

export default router;
