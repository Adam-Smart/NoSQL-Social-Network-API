const router = require('express').Router();
const {
  getThoughts,
  getOneThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');
// Route to GET all thoughts and to POST a thought
router.route('/').get(getThoughts).post(createThought);
// Route to GET, PUT and DELETE a thought by id 
router.route('/:id').get(getOneThoughtById).put(updateThought).delete(deleteThought);
//Route to POST a reaction to a thought
router.route('/:thoughtId/reactions').post(addReaction);
// Route to DELETE a reaction for a thought 
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;