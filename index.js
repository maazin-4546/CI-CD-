const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/service', (req, res) => {
  res.send('service Page')
})

app.get('/contact', (req, res) => {
  res.send('contact Page')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})