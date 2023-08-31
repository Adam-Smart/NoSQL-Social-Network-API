const router = require('express').Router();
const {
  getUsers,
  getOneUserById,
} = require('../../controllers/userController');

router.route('/').get(getUsers)

router.route('/:id').get(getOneUserById)

module.exports = router;