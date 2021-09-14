const router = require('express').Router()

router.get("/",function(req,res){
    console.log("Home route")
    res.render("landing")
})

router.get("/profile",function(req,res){
    console.log("profile")
    res.render("profile")
})
router.get("/login",function(req,res){
    console.log("login+++++")
    res.render("login")
})

module.exports = router;

