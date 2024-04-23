"use strict";

const Inventory = require("../models/Inventory");
const upload = require('../controllers/multer.controller')
const fs = require('fs');

const getAllInventory = async (req, res, next) => {
  try {
    let limit = parseInt(req.query.limit) || 0;
    let lastId = req.query.lastId;
    let currentPage = req.query.currentPage ? +req.query.currentPage : 0;
    
    let query = {};

    if (lastId) {
      query._id = { $gt: lastId };
    }

    const inventory = await Inventory.find().sort({ createAt: -1 })
      .skip(lastId ? (limit * currentPage) : 0)
      .limit(limit);

    const totalInventoryCount = await Inventory.countDocuments();

    const inventoryWithImageUrls = inventory.map(item => {
      return {
        ...item._doc,
        images: `http://localhost:5000/${item.images}` 
      };
    });

    res.status(200).json({
      code: 200,
      data: inventoryWithImageUrls,
      totalInventoryCount: totalInventoryCount,
      nextPage: currentPage + 1
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


const createInventory = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    try {
      if (!req.body.productName || !req.body.quantity || !req.body.price || !req.file) {
        console.log(req.file)
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const inventory = await Inventory.create({
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        images: req.file.filename 
      });
      
      res.status(200).json({
        code: 200,
        data: inventory,
      });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  });
};

const removeAllData = async () => {
  try {
    await Inventory.deleteMany({});
    console.log("All data removed successfully.");
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

module.exports = {
  getAllInventory,
  createInventory
};
