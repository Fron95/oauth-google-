const express = require('express')
const router = express.Router()
const controllers = require('./controllers/controller')

router.get('/', controllers.mainPage)
router.get('/complete', controllers.getCode)
router.get('/finish', controllers.getUserInfo)

module.exports = router