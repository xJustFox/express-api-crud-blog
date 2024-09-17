const posts = require('../controllers/posts.js');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const uploader = multer({ dest: 'public' });

router.get('/', posts.index);
router.post('/store', uploader.single('img'), posts.store);
router.get('/:slug', posts.show);
router.get('/:slug/download', posts.downloadImage);

module.exports = router;