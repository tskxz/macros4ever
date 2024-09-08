const express = require('express')
const app = express()
const foodRoute = require('./routes/foodRoute')
const port = 3000

app.use('/api/foods', foodRoute)

app.get('/', (req,res) => {
    res.send('Running!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})