const mongoose = require("mongoose");
const invoiceSchema = mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, "Please enter client name"],
    },
    date: {
      type: String,
      required: [true, "Please enter date"],
      default: 0,
    },
    amount: {
      type: String,
      required: [true, "Amount is required"],
    },
    purposeOfPayment: {
      type: String,
      required: [true, "Purpose of Payment is required"],
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Invoice  = mongoose.model("invoice", invoiceSchema);
module.exports = Invoice;
