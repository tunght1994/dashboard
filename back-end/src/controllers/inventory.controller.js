"use strict";

const Inventory = require("../models/Inventory");


const removeAllData = async () => {
  try {
    await Inventory.deleteMany({});
    console.log('All data removed successfully.');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

// Gọi hàm để xóa tất cả dữ liệu
// removeAllData()

const getAllInventory = async (req, res, next) => {
  try {
    let limit = parseInt(req.query.limit) || 0; 
    let lastId = req.query.lastId;
    let query = {};

    if (lastId) {
      query._id = { $gt: lastId }; 
    }
    const inventory = await Inventory.find(query).sort({ createAt: -1 }).limit(limit);
    const totalInventoryCount = await Inventory.countDocuments();
    
    res.status(200).json({
      code: 200,
      data: inventory,
      totalInventoryCount: totalInventoryCount
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
  createInventory
};
