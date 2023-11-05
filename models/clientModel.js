const mongoose = require("mongoose");
const clientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter last name"],
    },
    fullName: {
      type: String,
      required: [true, "Please enter  full name"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    placeOfBirth: {
      type: String,
      required: false,
      default: 0,
    },
    dateOfBirth: {
      type: String,
      required: false,
      default: 0,
    },
    countryOfCitizen: {
      type: String,
      required: [true, "citizen is required"],
      default: 0,
    },
    maritalStatus: {
      type: String,
      required: [true, "Marital Status is required"],
    },
    education: {
      type: String,
      required: [true, "Education  is required"],
    },
    occupation: {
      type: String,
      required: false,
      default: 0,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    residentialAddress: {
      type: String,
      required: [true, "Residential Address is required"],
    },
    mailingAddress: {
      type: String,
      required: [true, "Mailing Address is required"],
    },
    countryOfInterest: {
      type: String,
      required: false,
      default: 0,
    },
    purposeOfTraveling: {
      type: String,
      required: [true, "Purpose of Traveling is required"],
    },
    imageUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("client", clientSchema);
module.exports = Client;
