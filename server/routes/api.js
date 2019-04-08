
// I will use express
const express = require('express');

// I use express to use the router
const router = express.Router();

// I import my user model
const User = require('../models/user');


// I import my figure model
const Streetart = require('../models/streetart');

// I set my database with everything I need

//const db = 'mongodb://thibaultrousset:Vivezidane123!@ds139219.mlab.com:39219/api_piscines'


// I connect to my database
const mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root', // YOUR USERNAME
    password : 'password', // YOUR PASSWORD
    database : 'streetart'
});

connection.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) connection.release()

    return
})


// On the root of my app send back a message
router.get('/', function (req, res) {
    Streetart.getStreetart(function(err,rows){
        if(err) {
            res.status(400).send(err);
        }
        else
        {
            res.send(rows);
        }
    });
});

// If I get a post request from the register url I do that
// router.post('/register', (req, res) => {
//     // I get back the user data sent in the body
//     let userData = req.body
//     // I set the email to lowercase in database
//     userData.email = userData.email.toString().toLowerCase();
//     // I create a new User with the data sent with the user model I imported
//     let user = User.createUser(userData)
//     // I save it in the database
//     user.save((error, registeredUser) => {
//         if (error) {
//             console.error('Error !' + error)
//         } else {
//             // I send back to the client the user created
//             res.status(200).send(registeredUser)
//         }
//     })
// })

router.post('/register', function (req, res) {
    User.createUser(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});


// If I get a post request from the login url I do that
router.post('/login', function (req, res) {
    // I found the user with the same email I send in the body in my database
    User.getUser(req.body, (error, user) => {
        if (error) {
            console.error('Error !' + error)
        } else {
                    // if everything is ok then I send back to the client the user found
                    res.status(200).send(user)
                }
    })
})

router.get('/streetarts', (req, res) => {
        
        Streetart.getStreetart((err, figures) => {
            if (err) {
                res.send(err);
            }
            res.json(figures);
        });

})



router.get('/myStreetarts/:id', (req, res) => {
    // I get the connected user id sent in the url
    let id = req.params.id;
    // I found the streetart with  a creator same as the connected user id
    Streetart.getMyStreetart(id, (err, streetart) => {
        if (err) {
            res.send(err);
        }// I send back to the client the streetart
        res.json(streetart);
    });
})




//remove streetart from my streetarts

router.put('/myStreetarts', (req, res) => {
    // I get the connected user id sent in the body
    let id = req.body.streetartId;
    // I found the user with the id sent in parameter
    Streetart.removeStreetart(id, (err, user) => {
        if (err) {
            res.send(err);
        }
        // I found the figure that has the name sent in parameter and remove it from my database
       else {
           res.send(res)
       }
    });
})


// If I get a post request from the newFigure url I do that

router.post('/newStreetart', (req, res) => {
    // I get the parapeters send in the body
    let StreetartData = req.body;
    Streetart.createStreetart(StreetartData)
})


// If I get a post request from the updateFigure url I do that

router.post('/updateStreetart', (req, res) => {
    // I get the parapeters send in the body
    let streetartData = req.body;
    // I found the figure that has the name sent in parameter
    Streetart.updateStreetart(streetartData, function (err, figure) {
    })

})



module.exports.router=router;
module.exports.connection=connection;