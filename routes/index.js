import express from 'express'

const router = express.Router()

//query-параметры
router.get('/', (req, res) => {
  console.log(req.query)
  res.send(`search: ${req.query.search}`)
})

//пример POST запроса
router.post('/', (req, res) => {
  res.send('Post method ...')
})

//пример DELETE запроса
router.delete('/', (req, res) => {
  res.send('Delete method ...')
})

export { router as root }
