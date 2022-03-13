const User = require("./user.model");
const Database = require("../../core/database")
const Channel = require("../channels/channel.model");
const { ObjectId } = require("mongodb");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            if(req.headers.user_name && req.headers.password){
                ra = results.filter(function (currentElement) {
                    return currentElement.user_name === req.headers.user_name && currentElement.password === req.headers.password ;
                  });
                if(ra.lenght > 0) res.send(ra);
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
    create: (req, res) => {
        if(!req.headers.user_name || !req.headers.password){
            res.send("Invalido")
        }
        const new_user = {
            user_name:  req.headers.user_name,
            password: req.headers.password,
            birthday : req.headers.birthday
        };
        console.log(new_user)
        Database.collection("Users").insertOne(new_user, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
        });
        res.send('create user');
    },
    join: (req , res) => {
        arr = [];
        if(!req.headers.channel || !req.headers.current_user){
            res.send("Invalido")
        }
        const channel = new Channel();
        channel.getOne(req.headers.channel).then(result => {
            ra = []; 
            ra =  result.users.filter(function (currentElement) {
                return currentElement === req.headers.current_user;
              });

            if(ra.length === 0) {
                console.log("entré")
                result.users.push(req.headers.current_user);
                var myquery = {_id:ObjectId(req.headers.channel)};
                var newvalues = { $set: {"users": result.users}};
                const options = { upsert: true };
                
                Database.collection("Channel").updateOne(myquery, newvalues,options)
                res.send('Bienvenido al canal!');
            }
            else res.send('Usted ya se encontraba añadido en el canal')
    });
    }
}

module.exports = UsersController;