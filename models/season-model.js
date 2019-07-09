const mongoose = require('mongoose'); 
const a = require('./figure-model');

/*const skin_complexionSchema = mongoose.Schema({

});

const heightSchema = mongoose.Schema({

});*/

const seasonSchema = mongoose.Schema({
    
    name:{type:String, require:true},
    jeans:{type:String, require:true},
    tee:{type:String, require:true},
    //figure: {type: mongoose.Schema.Types.ObjectId, ref: 'Figure', require: true},
    //skin_complexion: {type: mongoose.Schema.Types.ObjectId, ref: 'skin_complexions', require: true},
    //height: {type: mongoose.Schema.Types.ObjectId, ref: 'height', require: true}
});

//module.exports = mongoose.model('heights', heightSchema);
//module.exports = mongose.model('skin_complexions', skin_complexionSchema);

const Season = mongoose.model('Season', seasonSchema, 'seasons');
module.exports = Season;
//data are stored in mongodb in the collection named as style(s) and on every query it will search the name of collection with (s) 
//like style(s).