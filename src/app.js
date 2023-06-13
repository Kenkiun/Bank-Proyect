const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const usersRoutes = require('./routes/users.routes')
const transfersRoutes = require('./routes/transfers.routes')
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/transfers', transfersRoutes)

module.exports = app