const Auth = require("../models/Auth.js");

const createUser = (req,res,next) => {
  const auth = new Auth({
    username : req.body.username,
    password : req.body.password
  })
  auth.save()
    .then(resp => {
      res.status(200).json({
        success : true,
        message : "User added"
      })
    })
    .catch(err => {
      res.status(200).json({
        success : false,
        message : "Some internal error occured"
      })
    })
}

const getUsers = (req,res,next) => {
  Auth.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(200).json({
      success : false,
      message : "Some internal error occured!"
    })
  })
}

const loginUsers = (req,res,next) => {
  username = req.body.username,
  password = req.body.password
  
  Auth.findOne({username : username})
  .then(resp => {
    if(resp){
      if(resp.password !== password){
        res.status(400).json({
          success : false,
          message : "Password doesn't match"
        })
      } else {
        res.status(200).json({
          success : true,
          message : "User Logged In!"
        })
      }
    } else {
      res.status(400).json({
        success : false,
        message : "No user has been found!"
      })
    }
  })
}

module.exports = {
  createUser, getUsers, loginUsers
}

