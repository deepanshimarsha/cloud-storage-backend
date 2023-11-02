const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: String,
  owner: String,
  last_opened: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
  type: String,
});

const folderSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  files: [fileSchema], // An array of file documents
});

const Folder = mongoose.model("Folder", folderSchema);

module.exports = Folder;
