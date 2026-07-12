// const express = require('express');
// //const users = require('./MOCK_DATA.json');
// const app = express();
// // const fs = require('fs')
// const port = 3000;
// //const mongoose = require('mongoose');
// const userRouter = require('./routes/user')
// const {connectToMongoDB} = require('./connection')
// const {logReqRes} = require('./middlewares/index')

// Connection 
// connectToMongoDB('mongodb://127.0.0.1:27017/youtube-app-1') 
// mongoose
// .connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.log('Error connecting to MongoDB', err));


// Schema for user data, it defines the structure of the data that will be stored in the database
// const userSchema = new mongoose.Schema({
//     firstName:{ 
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: false,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     jobTitle: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     }
// }, {
//     timestamps: true
//     // timestamps will automatically add createdAt and updatedAt fields to the schema
//     // createdAt will store the date and time when the document was created
//     // updatedAt will store the date and time when the document was last updated
//     // we can use these fields to track the changes made to the document
// }) - in the model folder


// model is used to create a collection in the database, it takes two arguments, the name of the collection and the schema
// const User = mongoose.model('User', userSchema); - model folder


// Middleware - Plugin that can be used to modify the request and response objects
// urlencoded is used to parse the data sent in the request body, it is used when we send data from a form 
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log("hello from middleware 1")
//     req.myUserName = "Tejas Shinde"
//     fs.appendFile('./log.txt', `${Date.now()}: ${req.method}: ${req.path}`, (err, data) => {
//          next();
//     })
//     //return res.json({msg: "hello from middleware 1"})
   
// })
// next() is used to pass the control to the next middleware function, 
// if we don't call next() then the request will be stuck in this middleware and will not reach the route handler

// app.use((req, res, next) => {
//     console.log("hello from middleware 2")
//     // return res.end("hey")
//     next();
// })


//Routes

// this is how  we can render HTML data in the browser
// app.get('/users', async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//         ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join('')}
//     </ul>
//     `
//     res.send(html)
// })


// //REST API
// // '/api' means it will give JSON data instead of HTML data
// app.get('/api/users', async (req, res) => {
//     //console.log(req.headers)
//     const allDbUsers = await User.find({});

//     if(!allDbUsers) return res.status(404).json({msg: "User not found"})
//     // res.setHeader('X-MyName',"Tejas Shinde" ) // custom header, we can set any custom header in the response
//     // Always add X to the custom header name to avoid conflicts with standard headers
//     // console.log("get route", req.myUserName)
//     return res.json(allDbUsers);
// })


// // Dynamic Routing

// // app.get('/api/users/:id', (req, res) => {
// //     const id = Number(req.params.id);
// //     const user = users.find(user => user.id === id);
// //     return res.json(user);
// // })


// app.post('/api/users', async (req, res) => {
//     // TO DO: Create user - 
//     const body =req.body;
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
//         return res.status(400).json({msg: "Missing required fields"})
//     }

//     const result =await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.job_title
//     })

//     console.log(result)

//     return res.status(201).json({status: "success"})

//     // console.log('Body: ', body)
//     // users.push({...body, id: users.length + 1})
//     // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     //     return res.status(201).json({status: "success", id: users.length})
//     // })
    
// })


// app.patch('/api/users:id', (req, res) => {
//     // TO DO: Edit the user with id
//     return res.json({status: "pending"})
// })

// app.delete('/api/users:id', (req, res) => {
//     // TO DO: Delete the user with id
//     return res.json({status: "pending"})
// })

// patch delete and get all are same as they are working with id
// so we can merge them into one route and use different methods for each operation



// Dynamic Routing
// /api/users/:id - is used for dynamic routing, where :id is a placeholder for the user id
// app.route('/api/users/:id').get(async (req, res) => {
//     //const id = Number(req.params.id);
//     //const user = users.find(user => user.id === id);
//     const user = await User.findById(req.params.id);
//     return res.json(user);
// }).patch(async (req, res) => {
//     // edit user with id
//     await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
//     return res.json({status: "Success"})
// }).delete(async (req, res) => {
//     // delete user with id
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({status: "Success"})
// })




// app.use('/users', userRouter)


// app.listen(port, () => {
//     console.log('Server is listening on port ' + port)
// })