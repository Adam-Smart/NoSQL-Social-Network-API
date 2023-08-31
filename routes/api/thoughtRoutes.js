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

router.route('/').get(getThoughts).post(createThought);

router.route('/:id').get(getOneThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;