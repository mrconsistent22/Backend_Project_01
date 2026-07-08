const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const fs = require('fs')
const port = 3000;

//Middleware - Plugin that can be used to modify the request and response objects
// urlencoded is used to parse the data sent in the request body, it is used when we send data from a form 
app.use(express.urlencoded({ extended: false }));

//Routes

// this is how  we can render HTML data in the browser
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})


//REST API
// '/api' means it will give JSON data instead of HTML data
app.get('/api/users', (req, res) => {
    return res.json(users);
})


// Dynamic Routing

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// })


app.post('/api/users', (req, res) => {
    // TO DO: Create user - 
    const body =req.body;
    console.log('Body: ', body)
    users.push({...body, id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length})
    })
    
})


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
app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
}).patch((req, res) => {
    // edit user with id
    return res.json({status: "pending"})
}).delete((req, res) => {
    // delete user with id
    return res.json({status: "pending"})
})







app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})