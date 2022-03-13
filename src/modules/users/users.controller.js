const User = require("./user.model");
const Database = require("../../core/database")

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            if(req.headers.user_name && req.headers.password){
                ra = results.filter(function (currentElement) {
                    return currentElement.user_name === req.headers.user_name && currentElement.password === req.headers.password ;
                  });
                if(ra) res.send(ra);
                else res.send("Usuario no encontrado")
            }
            else
                res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },    
    log_in: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
        if(results){
            ra = results.filter(function (currentElement) {
                return currentElement.user_name === req.params.user && currentElement.password === req.params.password ;
              });
            if(ra) res.send(ra);
            }
        else 
        res.send("usuario no encontrado")
    });
    },
    create: (req, res) => {
        const new_user = {
            user_name:  req.body.user_name,
            password: req.body.password,
            birthday : req.body.birthday
        };
        console.log(new_user)
        Database.collection("Users").insertOne(new_user, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
        });
        res.send('create user');
    }
}

module.exports = UsersController;