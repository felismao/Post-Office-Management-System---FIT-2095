const express = require("express");
const app = express();
app.listen(8080);
const mongoose = require('mongoose'); //A layer of mongoDB
const Parcel= require('./routers/parcels');
const sender= require('./routers/senders');
let path = require('path');
//connect angular to no
app.use("/", express.static(path.join(__dirname, "dist/weeklab")));


// parse application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const url = 'mongodb://localhost:27017/postoffice';

mongoose.connect(url, function (err) {
  if (err) {
      return console.log('Mongoose - connection error:', err);
  }
  console.log('Connect Successfully');

});

app.get('/sender/:sender', sender.getAllSender);
app.post('/sender', sender.createOneSender);
app.delete('/sender/:id', sender.deleteOneSender);
app.put('/sender', sender.updateOneSender);
app.put('/sender/addparcel', sender.addParcel);
app.get('/sender', sender.getSenders);

//app.get('/parcel', Parcel.getAllParcel);
app.put('/parcel', Parcel.updateOneParcel);
app.get('/parcel', Parcel.getParcels);


