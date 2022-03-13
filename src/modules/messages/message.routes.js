const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *       - Messages
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);
/**
  * @swagger
  *   /api/users/:
  *     post:
  *       tags:
  *       - Message
  *       description: Send new message
  *       parameters:
  *         - in: header
  *           name: channel
  *           required: true
  *           description: The dest channel id
  *         - in: header
  *           name: sender
  *           required: true
  *           description: The id from the current user 
  *         - in: header
  *           name: content
  *           required: true
  *           description: the content of the message
  *         - in: header
  *           name: date
  *           required: true
  *           description: current date
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 
 router.post('/',controller.create);
 
 module.exports = router;
