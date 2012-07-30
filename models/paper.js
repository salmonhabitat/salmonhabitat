var mongoose = require('mongoose');
mongoose.connect('MONGODB');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Paper = new Schema({
    id            : ObjectId
  , title         : String
  , author        : String
  , year          : Number
  , category      : String
});

mongoose.model('Paper', Paper);
var Paper = mongoose.model('Paper');





