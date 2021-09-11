const router = require('express').Router()

router.get("/",function(req,res){
    console.log("Home route")
    res.render("landing")
})


module.exports = router;

