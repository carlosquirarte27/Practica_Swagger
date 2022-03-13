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
 *         - in: path
 *           username: user
 *           required: true
 *           description: The user's unique username 
 *         - in: path
 *           password: password
 *           required: true
 *           description: The user's unique password
 *       
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
 router.get('/', controller.log_in);


 /**
 * @swagger
 *   /api/users/:
 *     post:
 *       tags:
 *       - Users
 *       description: Get one user by email and password
 *       parameters:
 *         - in: body
 *           username: username
 *           required: true
 *           description: The user's unique username  
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */


 
 router.post('/', controller.create);
module.exports = router;

