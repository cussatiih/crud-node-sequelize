import multer from 'multer';
import { extname, resolve } from 'path';

const randomNumber = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.includes('image')) {
      return callback(new multer.MulterError('Arquivo precisa ser uma imagem.'));
    }

    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${randomNumber()}${extname(file.originalname)}`);
    },
  }),
};
