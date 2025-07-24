const tracer = require('dd-trace').init();
const express = require('express')
const app = express()
const port = 3000

const list = []

app.get('/', (req, res) => {

  res.send('OctoFX 2025.06.30 ... ')
})

app.get('/rates', (req, res) => {

  // Memory Leak

  for (let i = 0; i < 1000; i++) {
    list.push({
      "name": "server",
      "arr":  new Array(10000000).fill("leak")
    })
  }

  res.send('USD: xx, CAD: xy, GBP: xz, SGP: yy AUD: yz')
})

app.get('/trade', (req, res) => {
  res.send('Convert currency 1 to currency 2 ...')
})

app.get('/daily-report', (req, res) => {
  res.send('OctoFX Daily report ... ')
})

app.listen(port, () => {
  console.log(`OctoFX 2025. Listening on port ${port}`)
})
