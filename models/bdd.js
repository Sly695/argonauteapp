var mongoose = require("mongoose");

var options = {
  connectTimeoutMS: 5000,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect("mongodb+srv://slyUser:123456!@cluster0.heabt.mongodb.net/argonauteApp?retryWrites=true&w=majority", options, function (err) {
  err ? console.log(err) : console.log("BDD OK");
});

module.exports = mongoose;
