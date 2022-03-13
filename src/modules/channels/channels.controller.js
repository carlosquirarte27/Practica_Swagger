const Channel = require("./channel.model");
const Database = require("../../core/database")

const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {             /*Permite crear el invite si en el body contiene un usuario, y coincide con el administrador del canal
                                        La idea se basa en que si el usuario quiere invitar, ya se sabe el id de la sala, pero el usuario no lo ve
                                        entonces si se solicita se manda la sala y el usuario*/
        const channel = new Channel();
        if(req.headers.current_user){
            channel.getOne(req.params.id).then(result => {
                if(result.channel_admin === req.headers.current_user) 
                    res.send("Id de invitación: "  +result._id)
                else res.send("sólo el administrador del canal puede acceder al id de invitación");
            });
        }
        else
        channel.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_channel = {
            name:  req.headers.name,
            channel_admin: req.headers.channel_admin,
            messages : req.headers.messages,
            users: req.headers.users
        };
        Database.collection("Channel").insertOne(new_channel, function(err, res) {
        if(err) res.send("err");
        else console.log("Todo bien")
        });
        res.send('Canal creado con exito');
    },
}

module.exports = ChannelsController;