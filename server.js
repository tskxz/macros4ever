const express = require('express')

const app = express()

const foodRoute = require('./routes/foodRoute')
const userRoute = require('./routes/userRoute')

const port = 3000

app.use('/api/foods', foodRoute)
app.use('/api/users', userRoute)

app.get('/', (req,res) => {
    res.send('Running!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})