const router = require('express').Router();
const apiRoutes = require('./api');
const homeRouter = require("./homeRoutes")

router.use('/api', apiRoutes);
router.use("/",homeRouter)

module.exports = router;
