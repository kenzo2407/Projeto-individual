var quizModel = require("../models/quizModel");
var aquarioModel = require("../models/aquarioModel");

function quiz(req, res) {
    var pontos = req.body.pontosServidor;
    var fkUsuario = req.body.fkUsuario;


    if (pontos == undefined) {
        res.status(400).send("Sua pontuação está undefined");
    } else {

        quizModel.quiz(pontos, fkUsuario)
            .then(
                function (resultadoQuiz) {
                    res.json(resultadoQuiz);
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
            )
    }
}

module.exports = {
    quiz,
}