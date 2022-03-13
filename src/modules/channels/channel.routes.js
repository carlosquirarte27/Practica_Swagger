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
  *       description: Get one channel by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The channels's unique ID
  *         - in: header
  *           name: current_user
  *           required: false
  *           description: The id from the current user to get the invite id (if you want to )
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */

 router.get('/:id', controller.getOne);

  /**
  * @swagger
  *   /api/channels/:
  *     post:
  *       tags:
  *       - Channels
  *       description: Create a channel
  *       parameters:
  *         - in: header
  *           name: name
  *           required: true
  *           description: Name of the channel
  *         - in: header
  *           name: channel_admin
  *           required: true
  *           description: The id from the user who created the channel
  *         - in: header
  *           name: Messages
  *           required: true
  *           description: Array of messages on the channel
  *         - in: header
  *           name: Users
  *           required: true
  *           description: Array of users on the channel
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */

 router.post('/',ChannelsController.create)
module.exports = router;

