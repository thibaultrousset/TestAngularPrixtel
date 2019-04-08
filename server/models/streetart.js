var db = require('../routes/api');

var Streetart = {
    getStreetart: function(callback)
    {
        return db.connection.query('SELECT * from streetart', callback);
    },
    getMyStreetart: function(id,callback)
    {
        return db.connection.query('SELECT * from streetart where streetartCreator = ?', [id],callback);
    },
    createStreetart: function (Streetart, callback) {
        return db.connection.query('Insert into streetart(streetartAutor, streetartPicture, streetartCreator) values(?, ?, ?)',[Streetart.streetartAutor, Streetart.streetartPicture,Streetart.streetartCreator], callback);
    },
    removeStreetart: function (id, callback) {
        return db.connection.query('delete from streetart where streetartId = ?',[id], callback);
    },
    updateStreetart: function (Streetart, callback) {
        return(
            db.connection.query('UPDATE streetart SET streetartAutor = ? WHERE streetartId = ?',[Streetart.streetartAutor, Streetart.streetartId], callback),
            db.connection.query('UPDATE streetart SET streetartPicture = ? WHERE streetartId = ?',[Streetart.streetartPicture, Streetart.streetartId], callback)
        );
    },
}

module.exports = Streetart;