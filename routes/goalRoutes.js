const express = require('express');
const router = express.Router();
const {
  getGoals,
  getGoalByID,
  createGoal,
  updateGoalByID,
  deleteGoalByID,
} = require('../controllers/goalController');

router.route('/').get(getGoals).post(createGoal);
router
  .route('/:id')
  .get(getGoalByID)
  .put(updateGoalByID)
  .delete(deleteGoalByID);

module.exports = router;
