
const Post = require('../models/posts')

function create({
  title,
  author,
  dateCreate,
  readingTime,
  imageUrl
}) {
  const newPost = new Post({
    title,
    author,
    dateCreate,
    readingTime,
    imageUrl
  })
  return newPost.save()
}

function getAll() {
  return Post.find()
}

function getById(id) {
  return Post.findById(id)

}

function deletebyId(id) {
  return Post.findByIdAndDelete(id)
}

function updateById(id, postInfoToUpdate) {
  return Post.findByIdAndUpdate(id, postInfoToUpdate)
}

module.exports = {
  create,
  deletebyId,
  getAll,
  getById,
  updateById
}