const mongoose= require ('mongoose')
const subscriberSchema= new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    subscriberToChannel:{
        type:String,
        require:true
    },
    subscribedDate:{
        type:Date,
        require:true,
        default:Date.now
    }
})
module.exports=mongoose.model('subscriber',subscriberSchema)