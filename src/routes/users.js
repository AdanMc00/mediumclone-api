
const express = require('express')
const user = require('../usesCases/user')
const router = express.Router()
const auth = require ('../middlewares/auth')

router.post('/',async(request,response)=> {
  try {
    const userCreated = await user.create(request.body)
    response.json ( {
      success: true,
      message: 'user create',
      data: {
        user:userCreated
      }
    })
  } catch (error) {
    response.status(400),
      response.json({
        success: false,
        message: error.message
      })
  }
})

router.post('/login',async(request,response)=>{
  try {
    const {password,email} = request.body
    if(!password || !email) throw new  Error('unauthorized')
    const jwt = await user.login(email, password)
    response.json ( {
      success: true,
      message: 'loged',
      data: {
        token:jwt
      }
    })
  } catch (error) {
  response.status(400),
  response.json({
    success: false,
    message: error.message
  })
}
})

router.delete('/:id',auth, (request,response)=>{
  try {
    const {id} = request.params
    const userDeleted = user.deleteById(id)
    response.json ( {
      success: true,
      message: 'deleted',
      data: {
        user:userDeleted
      }
    })
  } catch (error) {
  response.status(400),
  response.json({
    success: false,
    message: error.message
  })
}
})

module.exports = router