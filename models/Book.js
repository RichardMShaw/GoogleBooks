const { model, Schema } = require('mongoose')

module.exports = model(
  'Book',
  new Schema({
    title: String,
    authors: Boolean,
    description: String,
    image: String,
    link: String,
  }),
)
