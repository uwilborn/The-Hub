const router = require('express').Router()

router.get("/",function(req,res){
    console.log("Home route")
    res.render("landing")
})

router.get("/about",function(req,res){
    console.log("about")
    res.render("profile")
})
router.get("/memberlogin",function(req,res){
    console.log("memberlogin")
    res.render("memberlogin")
})
router.get("/bookexchange",function(req,res){
    console.log("bookexchange")
    res.render("bookexchange")
})
router.get("/bookstore",function(req,res){
    console.log("bookstore")
    res.render("bookstore")
})
router.get("/contact",function(req,res){
    console.log("contact")
    res.render("contact")
})

module.exports = router;

