var mongoose = require('mongoose');

var phraseSchema = new mongoose.Schema({
	phrase_arr: {type: String, required: true}
});

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
//db is called final_project_db
//collection is called phrases
//the collection is made up of one document which has an array
	//called phrase_arr
//phrase_arr is an array of strings (these are the phrases) all in caps