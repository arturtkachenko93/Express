import express from "express";
import Connection from "../ext/Connection.js";


const router = express.Router()

const collection = 'users'

Connection.connectToMongo()

router.route('/').get((req, res) => {
  const content = []
  //
  // res.render('pages/users', {
  //   title: 'Users',
  //   siteName: 'users',
  //   content
  // })
})

//цепочка запросов
router.route('/:id').get((req, res) => {
  const id = req.params.id

  const content = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    _id: id
  }

  res.render('pages/user', {
    title: 'Users',
    siteName: 'users',
    content
  })
}).post((req, res) => {
  Collection.db.collection(collection).insertOne(req.body, (err, result) => {
    if(err) {
      throw err
    }

    res.redirect('/user')
  })

}).put((update, res) => {
  res.send('update user ...')
}).delete((req, res) => {
  res.send('delete user ...')
})

export { router as user }
