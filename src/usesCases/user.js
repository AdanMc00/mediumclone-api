const User = require ('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jsonwebtoken')

async function create(userData){
  const {password, ...restUserData}= userData

  const  encryptedPassword = await bcrypt.hash(password)

  return User.create({password:encryptedPassword,...restUserData})
}

function deleteById(id){
  return User.findByIdAndDelete(id)
}

async function login (email,password){
  const userFound = await User.findOne({email})
  if(!userFound) throw new Error ('un')
  const isValidPassword = await bcrypt.compare(password,userFound.password)
  if(!isValidPassword)throw new Error('una')
  return jwt.sign({id: userFound._id})
}
module.exports = {
  create,
  deleteById,
  login
}