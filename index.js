const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 3000;

//Routes

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})


//REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
})

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// })

app.post('/api/users', (req, res) => {
    // TO DO: Create user
    return res.json({status: "pending"})
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
// so we can merge them into one route and use req.method to determine the action


app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
}).patch((req, res) => {
    return res.json({status: "pending"})
}).delete((req, res) => {
    return res.json({status: "pending"})
})



app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})