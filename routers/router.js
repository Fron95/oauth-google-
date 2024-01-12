const app = require('express')
const router = app.Router()
const controller = require('../controllers/controller')


router.get('/', controller.main)

router.get('/complete', controller.complete)



module.exports = router