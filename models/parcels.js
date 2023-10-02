const mongoose = require("mongoose");
const parcelSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: 'Sender'
  },
   address: {type: String, required: true,
    validate: {
    validator: function(addressValue){
        return addressValue.length >= 3;
    },
    message: 'address length cannot be less than 3'
    }},
    weight:{type:Number, required:true,
      validate: {
        validator:function(weightValue){
            return weightValue > 0;
        },
        message:'Weight cannot be a negative value'
    }},

    fragile:{type:Boolean, required:true}
   });
   module.exports = mongoose.model('Parcel', parcelSchema);