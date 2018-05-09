const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());


Genre = require('./models/genre');
Book = require('./models/book');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

//GET REQUEST TO ROOT
app.get('/', (req, res) => {
	res.send('Please use /api/books or api/genres');
});

//GENRES GET REQUEST
app.get('/api/genres', (req, res) => {
	Genre.getGenres(function(err, genres) {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

//GENRES ADD GENRE
app.post('/api/genres', (req, res) => {
	const genre = req.body;
	Genre.addGenre(genre, function(err, genre) {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//GENRES UPDATE GENRE
app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		console.log('Genre Updated');
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//GENRES DELETE GENRE
app.delete('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		console.log('Genre Deleted');
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//BOOKS GET REQUEST
app.get('/api/books', (req, res) => {
	Book.getBooks(function(err, books) {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//BOOKS GETBYID
app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//BOOKS ADD BOOK
app.post('/api/books', (req, res) => {
	const book = req.body;
	Book.addBook(book, function(err, book) {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//BOOKS UPDATE BOOK
app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		console.log('Book Updated');
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//BOOKS DELETE BOOK
app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		console.log('Book Deleted');
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Running server on port 3000');