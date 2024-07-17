const express = require('express')
const app = express()

app.use(express.static('./public'))
app.get('/student', (req, res) =>{
    res.sendFile(__dirname + '/public/student.html')
})