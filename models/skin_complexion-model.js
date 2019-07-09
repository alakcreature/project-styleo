const mongoose = require('mongoose');

const skinSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    avoid: String,
    use: String
});

const Skin = mongoose.model('Skin', skinSchema, 'skin_complexions');
module.exports = Skin;