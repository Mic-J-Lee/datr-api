const express = require('express')
const router = express.Router()
const GeoController = require('../controllers/geo')

router.get('/coords', GeoController.coords)

module.exports = router
