const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/Wedding-Pixels', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

module.exports = connection;