const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const budgetController = require('../controllers/budget');

router.get('/:userId', budgetController.getAllBudgetFromUser);
router.post('/', budgetController.createBudget);
router.put('/:id', budgetController.modifyBudget);

module.exports = router;