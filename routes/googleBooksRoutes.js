const router = require('express').Router()
const axios = require('axios')
const { googleKey } = require('../key')
const { Book } = require('../models')

router.get('/googlebooks/:search', (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${googleKey}`,
    )
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => console.log(err))
})

module.exports = router
