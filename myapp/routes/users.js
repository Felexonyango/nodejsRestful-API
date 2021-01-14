var express = require('express');
const { updateOne } = require('../model/userModel');

var router = express.Router();
const User =require('../model/userModel');
//Gets back the whole users
router.get('/',async(req,res)=>{

  try{
    const users =await User.find()
    res.json(users)



  }
  catch(err){
    res.json({message:err})

  }
  
})
 //This post all the user in the database
router.post('/',async(req,res)=>{


  const user=new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password

  })
  try{
    const savedUser= await user.save()
    res.json(savedUser)
  }
  catch(err){
    res.json({message:err})

  }



  
})
//gets back specific post

router.get('/:userId',async(req,res)=>{
  try{
    const user= await User.findById(req.params.userId)
     res.json(user)
  }
  catch(err){

    res.json({message:err})
  }

 

})
//Delete users from database
router.delete('/userId',async(req,res)=>{
  try{
    const removeuser =await User.remove({_id:req.params.userId})
    res.json(removeuser)
  }
  catch(err){
    res.json({message:err})
  }

})
router.patch('/userId',async(req,res)=>{
  try{
    const updateUser= await User.updateOne({_id:req.params.userId}, 
      {$set:{username:req.body.username}}
      );
    res.json(updateUser)

  }
  catch(err){

res.json({message:err})
  }
 
})


module.exports = router;
