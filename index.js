const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/user')
const {connectToMongoDB} = require('./connection')
const {logReqRes} = require('./middlewares/index')

// Connection
connectToMongoDB('mongodb://127.0.0.1:27017/youtube-app-1') 


app.use(express.urlencoded({ extended: false }));


// middleware initialization
app.use(logReqRes('log.txt'))
// Middleware - Plugin that can be used to modify the request and response objects


// Routes initialization
app.use('/api/users', userRouter)
// used to register the userRouter with the app, so that all the routes defined in the userRouter will be prefixed with /users


app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})