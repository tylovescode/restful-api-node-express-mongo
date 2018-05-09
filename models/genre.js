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
module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
};

// Update Genre
module.exports.updateGenre = (id, genre, options, callback) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}

//Delete Genre
module.exports.removeGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
};