const app = require('express')
const router = app.Router()


router.get("/", function (req, res) {
    return res.render("main");
  });

router.get("/complete", function (req, res) {
return res.render("complete");
});

module.exports = router