var mongoose=require('mongoose')
var Schema=mongoose.Schema

var articleSchema=new Schema({
    title:String,
    description:{type:String},
    tags:[String]
})

articleSchema.index({tags:1})
articleSchema.index({title:"text",description:"text"})

module.exports=mongoose.model('User',userSchema)