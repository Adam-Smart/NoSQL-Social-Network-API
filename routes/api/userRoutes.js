const router = require('express').Router();
const {
  getUsers,
  getOneUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getOneUserById).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend);
router.route('/:id/friends/:friendId').delete(removeFriend);

module.exports = router;