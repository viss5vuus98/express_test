const express = require('express')
const app = express()
const pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('./public'))

const port = 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log('server run on express')
})


