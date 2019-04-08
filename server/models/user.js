var db = require('../routes/api');

var User = {
    getUser: function(userData, callback)
    {0
        return db.connection.query('SELECT * from user where userPassword = ?',[userData.password], callback);
    },
    createUser: function (userData, callback) {
        return db.connection.query('Insert into user(userEmail, userPassword) values(?, ?)', [userData.email, userData.password],callback);
    }
}

module.exports = User;