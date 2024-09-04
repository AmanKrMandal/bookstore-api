const Book = require("../model/Book");

const createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

const getAllBooks = async (req, res) => {
  const { title, author, genre, page = 1, limit = 10 } = req.query;
  const query = {};

  if (title) query.title = new RegExp(title, "i");
  if (author) query.author = new RegExp(author, "i");
  if (genre) query.genre = genre;

  const books = await Book.find(query)
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(book);
};

const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).json({});
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
