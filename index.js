const express = require('express')
const dotenv = require('dotenv')
const notesRouter = require('./routers/notesRouter')
const { dbConnect } = require('./dbConnect')
const cors = require('cors')

dotenv.config()


const app = express()

// middlewares
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

// Routes
app.use('/', notesRouter)

// app.use('/', (req, res) => {
//     return res.send('Ok from server')
// })

const PORT = process.env.PORT || 4200

dbConnect()

app.listen(PORT, () => {
    console.log(`Start listining on port ${PORT}`);
})