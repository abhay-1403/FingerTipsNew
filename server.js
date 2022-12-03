const express = require('express')
const dbConnect = require('./dbConnect')
const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')
const app = express()
app.use(express.json())
const port = process.env.PORT || 5000

//users and newsitems are a custom api which I have created and I am using router for modularization of
//the code.
app.use('/api/newsitems/' , newsRoute)
app.use('/api/users/' , userRoute)

// const path = require('path')
// if(process.env.NODE_ENV === 'production'){

//     app.use('/' , express.static('client/build'))

//     app.get('*' , (req , res)=>{

//         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))

//     })

// }

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))