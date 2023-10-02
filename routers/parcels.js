
const mongoose = require('mongoose');

const Parcel = require('../models/parcels');
const Sender = require('../models/senders');

module.exports = {
    getAllParcel: function (req, res) {
        let query =  {address: req.query.address }
        Parcel.find(query,function (err, parcel) {
            if (err) {
                return res.json(err);
            } else {
                res.json(parcel);
            }
        }).populate("sender");
    },

    updateOneParcel: function (req, res) {
        Parcel.findOneAndUpdate({ _id: req.body.id }, req.body, function (err, parcel) {
            if (err) return res.status(400).json(err);
            if (!parcel) return res.status(404).json();
    
            res.json(parcel);
        });
    },
    getParcels: function (req, res) {
        Parcel.find(function (err, parcels) {
            if (err) return res.status(400).json(err);
            res.json(parcels);
        });
    }

}