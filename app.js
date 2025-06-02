const tracer = require('dd-trace').init();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('OctoFX 2025 ... ')
})

app.get('/rates', (req, res) => {
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