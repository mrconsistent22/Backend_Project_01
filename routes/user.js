const express = require('express');

const { handleGetAllUsers,
        handleGetUserById, 
        handleUpdateUserById, 
        handleDeleteUserById, 
        handleCreateUser  
    } = require('../controllers/user');   


const router = express.Router();
// Middleware - Plugin that can be used to modify the request and response objects


//Routes
router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateUser)


router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = router;