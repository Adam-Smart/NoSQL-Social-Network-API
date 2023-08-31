const router = require('express').Router();
const {
  getThoughts,
  getOneThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:id').get(getOneThoughtById).put(updateThought).delete(deleteThought);


module.exports = router;