'use strict'

const ExcelJS = require('exceljs');
const Inventory = require("../models/Inventory");


const exportDataInventory = async (req, res, next) => {
    try {
      const allData = await Inventory.find().sort({ createAt: -1 });
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Inventory');
  
      worksheet.columns = [
        { header: 'Ngày thanh toán', key: 'createAt', width: 20 },
        { header: 'Tên sản phẩm', key: 'productName', width: 30 },
        { header: 'Số lượng', key: 'quantity', width: 30 },
        { header: 'Giá sản phẩm', key: 'price', width: 30 },
      ];
  
      allData.forEach((item) => {
        worksheet.addRow({
          createAt: item.createAt,
          productName: item.productName,
          quantity: item.quantity,
          price: item.price,
        });
      });
  
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename="inventory.xlsx"');
      await workbook.xlsx.write(res);
      res.end();
    } catch (error) {
      console.error('Error exporting data:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  };


module.exports = {
    exportDataInventory
}