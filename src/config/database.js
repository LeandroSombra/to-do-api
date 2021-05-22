const mongoose = require('mongoose')
//tira mensagem de advertencia/
mongoose.Promise = global.Promise

// MongoClient.connect("mongodb://localhost:27017/todo", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

module.exports = mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})