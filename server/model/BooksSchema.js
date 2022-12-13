const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({

  title:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  publisher:{
    type: String,
    required: true
  },
  // image:{
  //   type: String,
  //   required: true
  // },
  stocks:{
    type: Number,
    required: true
  },
  // availableBooks:{
  //   type: Number,
  //   required: true
  // },
  ratings:{
    type: Number,
    required: true
  }

});

const Books = mongoose.model("books", BooksSchema);

module.exports = Books;