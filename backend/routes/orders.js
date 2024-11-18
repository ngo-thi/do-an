const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// Lấy danh sách đơn hàng
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Tạo đơn hàng mới
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

module.exports = router;
