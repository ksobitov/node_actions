const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello World'
  })
})

app.listen(5000, () => console.log('Listening'))
