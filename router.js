const app = require('express')
const router = app.Router()
const controllers = require('./controller')

router.get("/", controllers.requireAuth)

router.get("/complete", function (req, res) {
return res.render("complete");
});

module.exports = router