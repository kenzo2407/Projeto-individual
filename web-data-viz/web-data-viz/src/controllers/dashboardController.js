var dashboardModel = require("../models/dashboardModel");

function dashboard(req, res) {
   /* var pontos = req.body.pontosServidor;
    var qtd_usuarios = req.body.qtd_usuariosServidor; */



    usuarioModel.dashboard()
        .then(
            function (resultadoDashboard) {
                res.json(resultadoDashboard);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao registrar as pontuações! Erro:",
                    erro.sqlMessage
                );
                res.status(600).json(erro.sqlMessage)
            }
        );
}

module.exports = {
    dashboard,
}