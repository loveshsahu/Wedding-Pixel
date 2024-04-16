const mongoose=require('mongoose');
const {Schema}=mongoose

const adminSchema=new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    address:{
        type:String
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
      role:{
        type:String
      },
      loginToken:{
        type:String
      }

})
module.exports=mongoose.model("admin",adminSchema)