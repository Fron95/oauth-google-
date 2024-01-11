const app = require('express')
const router = app.Router()
const controllers = require('./controller')

router.get("/", controllers.requireAuth)

router.get("/complete", controllers.getToken)
router.get("/ultimate", function(req, res) {
    console.log("req.query.data",req.query.data)
    const data = JSON.parse(req.query.data)
    res.render('ultimate', {userInfo : data})
})

router.post('/api', controllers.postApi)

module.exports = router
