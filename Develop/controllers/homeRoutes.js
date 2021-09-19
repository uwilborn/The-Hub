const router = require('express').Router()

router.get("/",function(req,res){
    console.log("Home route")
    res.render("landing")
})

router.get("/about",function(req,res){
    console.log("about")
    res.render("profile")
})
router.get("/login",function(req,res){
    console.log("login")
    res.render("login")
})
router.get("/profile",function(req,res){
    console.log("profile", req.session.user_id)
    let user = {
        id: req.session.user_id,
        name: req.session.user_name,
        email: req.session.user_email
    }
    res.render("landing", user)
})
router.get("/bookstore",function(req,res){
    console.log("donate")
    res.render("donate")
})

router.get("/contact",function(req,res){
    console.log("contact")
    res.render("contact")
})

module.exports = router;

