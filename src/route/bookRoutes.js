const express = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controller/bookController");
const { protect } = require("../middleware/authMiddleware");
const bookRouter = express.Router();

bookRouter.route("/").get(getAllBooks).post(protect, createBook);
bookRouter
  .route("/:id")
  .get(getBookById)
  .put(protect, updateBook)
  .delete(protect, deleteBook);

module.exports = bookRouter;
