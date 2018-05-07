const mongoose = require('mongoose');

//Book Schema
const bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required:true
	},
	description:{
		type:String
	},
	author: {
		type: String,
		required:true
	},
	pages: {
		type: String
	},
	publisher: {
		type: String
	},
	image_url: {
		type: String
	},
	buy_url: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

//Allows Book to be accessed from outside
const Book = module.exports = mongoose.model('Book', bookSchema);

// get Books
module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
};