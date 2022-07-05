import express from "express";

const router = express.Router()
//псевдоавторизация
router.post('/', (req, res) => {
  //псевдобаза данных
  const users = [
    { login: 'Artur', password: '123456' },
    { login: 'Tanya', password: '123123' }
  ]

  //ищем юзера, который пришел в теле запроса в базе
  const user = users.find(user => {
      return user.login === req.body.login && user.password === req.body.password
    }
  )

  console.log(req.body)

  //возвращаем результат авторизации
  return user ? res.json({message: 'auth!'}) : res.status(401).json({message: 'incorrect login or password'})
})

export { router as auth }
