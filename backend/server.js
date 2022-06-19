const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const {errorHandler} = require('./middleware/errorHandler')
const connectDB = require('./db')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/players', require('./routes/playersRouter'))
// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

// const uri = process.env.ATLAS_URI;
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(uri)
//         console.log(conn.connection.host)
//         console.log('connected')
//     } catch (error) {
//         console.log(error)
//         // process.exit(1)
//     }
// }
// mongoose.connect(uri, ()=> {
//     console.log('connected')
// }, e => console.error(e));
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})