const dotenv = require('dotenv');
dotenv.config();
var mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@balabala-maeov.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('konaek gaes')
});


  
var kittySchema = new mongoose.Schema({
    name: String,
    time:{
        type: Date,
        default: Date.now
    }
});

kittySchema.methods.speak = function () {
    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
  }

var Kitten = mongoose.model('kocenk', kittySchema);

var koceng = new Kitten({ name: 'Apin si Kocenk' });

koceng.save(function (err, koceng) {
    if (err) { return console.error(err)}
    else { 
        koceng.speak();
        return console.log('saved')
    }
});

Kitten.find({ name: /^.*/ }, function (res) {
    return console.log('find>'+res);
  });