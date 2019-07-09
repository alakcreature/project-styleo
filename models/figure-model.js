const mongoose = require('mongoose');


const figureSchema = mongoose.Schema({
    name: {type:String, require:true},
    avoid: {type:String, require:true},
    use:{type:String, require:true},
    optional:{type:String, require:true}
});

const Figure = mongoose.model('Figure', figureSchema, 'figures');
module.exports = Figure;