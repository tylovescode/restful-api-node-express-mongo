const mongoose = require('mongoose');

//Genre Schema
const genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

//Allows Genre to be accessed from outside
const Genre = module.exports = mongoose.model('Genre', genreSchema);

// get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
};

//Add Genre
module.exports.addGenres = (genre, callback) => {
	Genre.create(genre, callback);
};