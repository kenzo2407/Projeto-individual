var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.get("/dashboard", function (req, res){
    usuarioController.dashboard(req,res);
});


module.exports = router;