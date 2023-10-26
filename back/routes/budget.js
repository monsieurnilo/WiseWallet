const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const budgetController = require('../controllers/budget');

router.get('/:userId',auth, budgetController.getAllBudgetFromUser);
router.post('/',auth, budgetController.createBudget);
router.put('/:id',auth, budgetController.modifyBudget);

module.exports = router;