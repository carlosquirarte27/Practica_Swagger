const router = require('express').Router();
const controller = require('./users.controller');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
router.get('/:id', controller.getOne);

  /**
  * @swagger
  *   /api/users/:
  *     get:
  *       tags:
  *       - Users
  *       description: Get one user by email and password
  *       parameters:
  *         - in: header
  *           name: user_name
  *           required: true
  *           description: The message's unique ID
  *         - in: header
  *           name: password
  *           required: false
  *           description: The id from the current user to get the invite id
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/', controller.getAll);



  /**
  * @swagger
  *   /api/users/:
  *     post:
  *       tags:
  *       - Users
  *       description: create new user
  *       parameters:
  *         - in: header
  *           name: user_name
  *           required: true
  *           description: The message's unique ID
  *         - in: header
  *           name: password
  *           required: true
  *           description: The id from the current user to get the invite id
  *         - in: header
  *           name: birthdate
  *           required: false
  *           description: The user birthdate
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 
 router.post('/', controller.create);

   /**
  * @swagger
  *   /api/users/:
  *     put:
  *       tags:
  *       - Users
  *       description: Join with an invite
  *       parameters:
  *         - in: header
  *           name: current_user
  *           required: true
  *           description: The current user id
  *         - in: header
  *           name: channel
  *           required: true
  *           description: The id from the current channel to get the invite id
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 
 router.put('/',controller.join);
module.exports = router;

