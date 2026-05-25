var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.post("/quiz", function (req, res) {
    usuarioController.quiz(req, res);
});

module.exports = router;