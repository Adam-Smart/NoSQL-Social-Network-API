const router = require('express').Router();
const {
  getUsers,
  getOneUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getOneUserById).put(updateUser).delete(deleteUser);

module.exports = router;