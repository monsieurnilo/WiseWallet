const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const categoryController = require('../controllers/category');

router.get('/', categoryController.getAllCategories);

module.exports = router;