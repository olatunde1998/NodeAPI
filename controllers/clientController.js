const Client = require("../models/clientModel");
const asyncHandler = require("express-async-handler");

// get all Clients
const getClients = asyncHandler(async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// get a single Client

const getClient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// create a Client
const createClient = asyncHandler(async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(200).json(client);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//  Update a Client
const updateClient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndUpdate(id, req.body);
    //we cannot find any client in database
    if (!client) {
      res.status(404);
      throw new Error(`cannot find any client with ID ${id}`);
    }
    const updatedClient = await Client.findById(id);
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//  delete a Client
const deleteClient = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
      res.status(404);
      throw new Error(`cannot find any client with ID ${id}`);
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};
