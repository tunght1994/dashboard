"use strict";

const Inventory = require("../models/Inventory");

// Hàm để xóa tất cả dữ liệu
const removeAllData = async () => {
  try {
    await Inventory.deleteMany({});
    console.log("All data removed successfully.");
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

// removeAllData() // api nay dung khong anh he

const getAllInventory = async (req, res, next) => {
  try {
    let limit = parseInt(req.query.limit) || 0;
    let lastId = req.query.lastId;
    let currentPage = req.query.currentPage ? +req.query.currentPage : 0;
    
    let query = {};

    if (lastId) {
      query._id = { $gt: lastId };
    }
    const inventory = await Inventory.find().sort({createAt: -1})
      .skip(lastId ? (limit * currentPage) : 0)
      .limit(limit);
    const totalInventoryCount = await Inventory.countDocuments();
    res.status(200).json({
      code: 200,
      data: inventory,
      totalInventoryCount: totalInventoryCount,
      nextPage: currentPage + 1
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
