const { getAll } = require('../controllers/purchase.controllers');
const express = require('express');

const purchaseRouter = express.Router();

purchaseRouter.route('/')
    .get(getAll)

module.exports = purchaseRouter;