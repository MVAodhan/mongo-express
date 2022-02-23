//
// gets all goals from /api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: 'get goals' });
};

// gets goal by id from /api/goals/:id
const getGoalByID = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `get goal ${id}` });
};

// creates a goal at /api/goals
const createGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  console.log(req.body);
  res.status(200).json({ message: 'create a goal' });
};

// updates a goal a /api/goals:id
const updateGoalByID = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update goal ${id}` });
};

// deletes a goal a /api/goals:id
const deleteGoalByID = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete goal ${id}` });
};

module.exports = {
  getGoals,
  getGoalByID,
  createGoal,
  updateGoalByID,
  deleteGoalByID,
};
