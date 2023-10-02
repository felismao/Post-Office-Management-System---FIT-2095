const mongoose = require("mongoose");
const senderSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true,
    validate: {
      validator: function(nameValue){
        return nameValue.length >= 3;
    },
    message: 'name should not be less than 3 characters'
    },
},

parcels: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Parcel'
}]
});
   module.exports = mongoose.model('Sender', senderSchema);