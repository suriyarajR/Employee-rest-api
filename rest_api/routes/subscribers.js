const express=require('express')
const subscriber = require('../models/subscriber')
const router=express.Router()
router.get('/',async (req,res)=>{
    try {
        const subscribers=await subscriber.find()
        res.json(subscribers)
    } 
    catch(err){
        res.status(500).json({message:err.message})

    }

})
router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})
router.post('/',async (req,res)=>{
    const subscriber=new this.subscriber({
        name:req.body.name,
        subscribedToChannel:req.body.subscribedToChannel
    })
    try{
        const newSubscriber= await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        res.status(400).json({message:err.message})
    }
    
})
router.patch('/:id',(req,res)=>{
    
})
router.delete('/:id',(req,res)=>{
    
})



module.exports= router
 