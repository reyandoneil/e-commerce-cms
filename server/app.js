require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/index')
const errhendler = require('./middleware/errhendler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)
app.use(errhendler)


app.listen(port, () => {
    console.log(`This app runing at port:${port}`);
})


// module.exports = app