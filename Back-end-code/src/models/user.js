const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber:{
    type:Number
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  images:{
    type:Array
  },
  role:{
    type:String
  },
  loginToken:{
    type:String
  }
},

{ timestamps:true}
);

module.exports = mongoose.model('User', userSchema);
