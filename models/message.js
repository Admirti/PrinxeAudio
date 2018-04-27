var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: { type: String, required: true},
    name: { type: String},
    email: { type: String},
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);