const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://vandy2803:vandy2803@cluster0.y2hjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
