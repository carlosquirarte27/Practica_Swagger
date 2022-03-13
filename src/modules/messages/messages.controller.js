const Message = require("./message.model");
const Database = require("../../core/database")
const Channel = require("../channels/channel.model");
const { ObjectId } = require("mongodb");


const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const message = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const channel = new Channel
        if(!req.headers.channel )
            res.send('Canal invalido');
        
        const new_message = {
            sender:  req.headers.sender,
            content: req.headers.content,
            date: req.headers.date
        };
        Database.collection("Message").insertOne(new_message, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
        });

        channel.getOne(req.headers.channel).then(result => {
                result.messages.push(new_message);
                var myquery = {_id:ObjectId(req.headers.channel)};
                var newvalues = { $set: {"messages": result.messages}};
                const options = { upsert: true };
                Database.collection("Channel").updateOne(myquery, newvalues,options)
                res.send('Mensaje enviado!');
            });
        
    }
}

module.exports = MessagesController;