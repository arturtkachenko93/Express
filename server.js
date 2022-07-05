import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { root } from "./routes/index.js"
import { auth } from "./routes/auth.js"
import { catalog } from "./routes/catalog.js"
import { user } from "./routes/user.js"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5001

//получаем логи в терминале
app.use(morgan(process.env.LOG_LEVEL))
//для получения тела запроса (body)
app.use(express.urlencoded({extended: false}))
//для получения json в теле запроса
app.use(express.json())

app.use('/', root)
app.use('/login', auth)
app.use('/catalog', catalog)
app.use('/user', user)

//запуск сервера
app.listen(PORT, () => {
  console.log(`server started on ${process.env.DOMAIN}:${PORT}`)
})
