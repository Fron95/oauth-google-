const app = require('express')
const router = app.Router()
const controllers = require('./controller')

router.get("/", controllers.requireAuth)

router.get("/complete", controllers.getToken)
router.get("/tokenComplete", function(req, res) {
    return res.render('tokenComplete')
})

router.post('/api', controllers.postApi)

module.exports = router