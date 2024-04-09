"use strict";

const Inventory = require("../models/Inventory");

const getAllInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.find({});
    res.status(200).json({
      code: 200,
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(200).json({
      code: 200,
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllInventory,
  createInventory,
};
