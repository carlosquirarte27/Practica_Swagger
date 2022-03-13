const router = require('express').Router();
const ChannelsController = require('./channels.controller');
const controller = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *         - in: header
  *           name: current_user
  *           required: false
  *           description: The id from the current user to get the invite id
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */

 router.get('/:id', controller.getOne);

 router.post('/',ChannelsController.create)
module.exports = router;

