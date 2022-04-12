const mongoose = require("mongoose");

const argonauteSchema = new mongoose.Schema({
  name: String,
});

const argonauteModel = mongoose.model("argonaute", argonauteSchema);

module.exports = argonauteModel;
