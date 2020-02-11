
const express = require('express')
const post = require('../usesCases/posts')
const router = express.Router()

router.get('/', async (req, res) => {
  try {

    const posts = await post.getAll()
    res.json({
      success: true,
      message: 'all posts',
      data: {
        posts
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.post('/',async(request, response) => {
  try {
    const newPost = await post.create(request.body)
    response.status(200),
    response.json({
      success:true,
      message:'post create',
      data:{
        post:newPost
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

router.get('/:id',async (req, res) => {
  try {
    const id = req.params.id
    const postfound =  await post.getById(id)
    res.json({
      success: true,
      message: 'posts by Id',
      data: {
        post:postfound
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const postDel = await post.deletebyId(id)
    res.json({
      success: true,
      message: 'post Delete',
      data: {
        post:postDel
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body 
    const upDateposts = await post.updateById(id,info)
    
    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        post:upDateposts
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

module.exports = router