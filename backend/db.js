require("dotenv").config();

const mongoose   = require("mongoose")
mongoose.connect(process.env.MONGO_URL)


const UserSchema = mongoose.Schema({
    Email:String,
    username:String,
    password:String,
    Age:Number,
    phoneNo:String,

})
const User = mongoose.model('User', UserSchema)

const LinkStoreSchema = mongoose.Schema({
    link:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
    
})
const Link = mongoose.model('Link',LinkStoreSchema)

module.exports={
    User,
    Link
}
