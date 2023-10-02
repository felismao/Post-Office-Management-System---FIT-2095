const mongoose = require('mongoose');

const Parcel = require('../models/parcels');
const Sender = require('../models/senders');

module.exports = {
    getAllSender: function (req, res) {
        let query = {sender: req.params.sender }
        Sender.find(query, function (err, sender) {
            if (err) {
                return res.json(err);
            } else {
                res.json(sender);
            }
        }).populate("parcels");
    },

    createOneSender: function (req, res) {
        let newSenderDetails = req.body;
        newSenderDetails._id = new mongoose.Types.ObjectId();

        let sender = new Sender(newSenderDetails);
        sender.save(function (err) {
            res.json(sender);
        });
    },

    deleteOneSender: function (req, res) {
        Sender.findOneAndRemove({ _id: req.params.id}, function (err) {
            if (err) return res.status(400).json(err);

            res.json();
        });
    },

    updateOneSender: function (req, res) {
        Sender.findOneAndUpdate({ _id: req.body.id }, req.body, function (err, sender) {
            if (err) return res.status(400).json(err);
            if (!sender) return res.status(404).json();

            res.json(sender);
        });
    },
    addParcel: function (req, res) {
        Sender.findOne({ _id: req.body.id }, function (err, sender) {
            if (err) return res.status(400).json(err);
            if (!sender) return res.status(404).json();
            
            let newParcel = req.body.parcels;
            newParcel._id = new mongoose.Types.ObjectId();
            newParcel.sender = sender._id;
    
            Parcel.create(newParcel, function (err, parcel) {
                if (err) return res.status(400).json(err);
                if (!parcel) return res.status(404).json();
    
                sender.parcels.push(parcel);
                sender.save(function (err) {
                    if (err) return res.status(500).json(err);
    
                    res.json(sender);
                });
            })
        });

    },
    getSenders: function (req, res) {
        Sender.find(function (err, senders) {
            if (err) return res.status(400).json(err);
            res.json(senders);
        });
    }
}


