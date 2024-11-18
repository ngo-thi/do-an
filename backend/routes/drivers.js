const express = require('express');
const Driver = require('../models/Driver');
const router = express.Router();

// Lấy danh sách tài xế
router.get('/', async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

// Tạo tài xế mới
router.post('/', async (req, res) => {
  const driver = new Driver(req.body);
  await driver.save();
  res.status(201).json(driver);
});

module.exports = router;
