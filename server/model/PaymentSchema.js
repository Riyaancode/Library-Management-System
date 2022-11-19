const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
  paymentMethod: String,
  amount: Number,


});

const Payment = mongoose.model("payment", PaymentSchema);

module.exports = Payment;