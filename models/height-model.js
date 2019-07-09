const mongoose = require('mongoose');

const heightSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    avoid: String,
    use: String
});

const Height = mongoose.model('Height', heightSchema, 'heights');
module.exports = Height;