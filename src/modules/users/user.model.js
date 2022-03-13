const Model = require('../../core/model');
const { ObjectId } = require('mongodb');

class User extends Model {
    constructor() {
        super('Users');
    }
}

module.exports = User;



