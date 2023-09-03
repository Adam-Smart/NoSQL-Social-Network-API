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
// Route to GET and all Users and to POST a new user
router.route('/').get(getUsers).post(createUser);
// Route To GET, PUT and DELETE a user by id
router.route('/:id').get(getOneUserById).put(updateUser).delete(deleteUser);
//Route to POST a new friend to a user by id 
router.route('/:id/friends/:friendId').post(addFriend);
// Route to DELETE a friend from a user by id
router.route('/:id/friends/:friendId').delete(removeFriend);

module.exports = router;