import express from 'express'

const router = express.Router()

//placeholder в uri
router.get('/:id/section/:part', (req, res) => {
  const info = `catalog: ${req.params.id} part ${req.params.part}`
  res.send(`This is ${info}`)
})

router.get('/', (req, res) => {
  res.send(`Catalog ...`)
})

export { router as catalog }
